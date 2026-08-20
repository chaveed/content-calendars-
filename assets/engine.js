/* ═══════════════════════════════════════════════
   SHARED ENGINE — VenPro Content Calendars
   Loaded AFTER: firebase SDK, firebase-config.js, team.js,
   and this client's data.js (which defines window.CLIENT,
   window.TYPES, window.HASH, window.CONTENT, and the
   production/approval data arrays).
   ═══════════════════════════════════════════════ */

(function () {
  const CLIENT = window.CLIENT || {};
  const SLUG = CLIENT.slug || 'client';

  // Apply brand colors
  const root = document.documentElement.style;
  if (CLIENT.accent) root.setProperty('--accent', CLIENT.accent);
  if (CLIENT.accent2) root.setProperty('--accent2', CLIENT.accent2);
  if (CLIENT.accentlt) root.setProperty('--accentlt', CLIENT.accentlt);

  // ═══════════════════════════════════════════════
  // HEADER RENDER
  // ═══════════════════════════════════════════════
  function renderHeader() {
    const logo = document.getElementById('logo-area');
    if (logo) {
      const iconContent = CLIENT.logoIcon || CLIENT.monogram || (CLIENT.brandName || 'VP').slice(0, 2).toUpperCase();
      logo.innerHTML = `
        <div class="logo-icon">${iconContent}</div>
        <div>
          <div class="brand-name">${CLIENT.brandName || 'Client'}</div>
          <div class="brand-sub">${CLIENT.brandSub || 'Content Calendar'}</div>
        </div>`;
    }
    const chips = document.getElementById('hdr-chips');
    if (chips) {
      const total = window.CONTENT.length;
      const vid = window.CONTENT.filter(c => c.format === 'VIDEO').length;
      const still = window.CONTENT.filter(c => c.format === 'STILL').length;
      const acts = Array.from(new Set(window.CONTENT.map(c => c.act))).length;
      chips.innerHTML = `
        <div class="chip">${total} <em>Posts</em></div>
        ${vid ? `<div class="chip">${vid} <em>Video</em></div>` : ''}
        ${still ? `<div class="chip">${still} <em>${CLIENT.stillPartnerLabel || 'Still'}</em></div>` : ''}
        ${acts ? `<div class="chip">${acts} <em>Activations</em></div>` : ''}
        <div class="chip" id="visible-count">${total} <em>Showing</em></div>
        <div class="chip" id="done-chip" style="border-color:#2e7d32;color:#43a047">
          <span id="done-count">0</span>/<span id="done-total">${total}</span> <em>Done</em>
          <div class="done-progress-bar"><div class="done-progress-fill" id="done-progress-fill" style="width:0%"></div></div>
        </div>
        <div class="chip" id="member-tally" style="display:flex;gap:4px;border-color:#383838;background:#2a2a2a;padding:4px 8px;"></div>`;
    }
    const footer = document.getElementById('site-footer');
    if (footer) {
      footer.innerHTML = `<span>${CLIENT.brandName || ''}</span> — Managed by VenPro Marketing${CLIENT.footerLine ? ' — ' + CLIENT.footerLine : ''} · <a href="${CLIENT.homeHref || '../../index.html'}">← All Clients</a>`;
    }
    document.title = `${CLIENT.brandName || 'Client'} — Content Calendar`;
  }

  // ═══════════════════════════════════════════════
  // FILTER BUTTONS (built from TYPES)
  // ═══════════════════════════════════════════════
  let activeFilter = 'all';
  let searchTerm = '';

  function renderBanner() {
    const el = document.getElementById('client-banner');
    if (!el) return;
    if (CLIENT.banner) {
      el.style.display = 'block';
      el.innerHTML = CLIENT.banner;
    } else {
      el.style.display = 'none';
    }
  }

  function renderFilterButtons() {
    const wrap = document.getElementById('filter-buttons');
    if (!wrap) return;
    const total = window.CONTENT.length;
    const hasStillFmt = window.CONTENT.some(c => c.format === 'STILL');
    const hasVideoFmt = window.CONTENT.some(c => c.format === 'VIDEO');
    let html = `<button class="fbtn on" data-filter="all">All ${total}</button>`;
    Object.keys(window.TYPES).forEach(key => {
      const t = window.TYPES[key];
      html += `<button class="fbtn" data-filter="type:${key}">${t.icon} ${t.label}</button>`;
    });
    if (hasVideoFmt) html += `<button class="fbtn" data-filter="format:VIDEO">🎥 Video Only</button>`;
    if (hasStillFmt) html += `<button class="fbtn" data-filter="format:STILL">🖼 ${CLIENT.stillPartnerLabel || 'Still Only'}</button>`;
    wrap.innerHTML = html;
    wrap.querySelectorAll('.fbtn').forEach(btn => {
      btn.addEventListener('click', () => doFilter(btn.dataset.filter, btn));
    });
  }

  function doFilter(filter, btn) {
    activeFilter = filter;
    document.querySelectorAll('.fbtn').forEach(b => b.classList.remove('on'));
    if (btn) btn.classList.add('on');
    applyFilter();
  }
  window.doFilter = doFilter;

  function doSearch(val) {
    searchTerm = (val || '').toLowerCase();
    applyFilter();
  }
  window.doSearch = doSearch;

  function applyFilter() {
    const cards = document.querySelectorAll('.ccard');
    let visible = 0;
    cards.forEach(c => {
      const ctype = c.dataset.type;
      const cfmt = c.dataset.format;
      const title = c.querySelector('.cc-title')?.textContent.toLowerCase() || '';
      const hook = c.querySelector('.cc-hook')?.textContent.toLowerCase() || '';

      let typeMatch = true;
      if (activeFilter === 'all') typeMatch = true;
      else if (activeFilter.startsWith('format:')) typeMatch = cfmt === activeFilter.split(':')[1];
      else if (activeFilter.startsWith('type:')) typeMatch = ctype === activeFilter.split(':')[1];

      const searchMatch = !searchTerm || title.includes(searchTerm) || hook.includes(searchTerm);
      const show = typeMatch && searchMatch;
      c.classList.toggle('hidden', !show);
      if (show) visible++;
    });
    const vc = document.getElementById('visible-count');
    if (vc) vc.innerHTML = `${visible} <em>Showing</em>`;
    const nr = document.getElementById('no-res');
    if (nr) nr.classList.toggle('show', visible === 0);
    const pct = window.CONTENT.length ? (visible / window.CONTENT.length * 100).toFixed(0) : 0;
    const pb = document.getElementById('prog-bar');
    if (pb) pb.style.width = pct + '%';
  }

  // ═══════════════════════════════════════════════
  // CALENDAR CARD RENDER
  // ═══════════════════════════════════════════════
  function platTag(p) {
    const m = { IG: 'p-ig', FB: 'p-fb', TT: 'p-tt', GB: 'p-gb', YT: 'p-yt', LI: 'p-li' };
    const l = { IG: 'Instagram', FB: 'Facebook', TT: 'TikTok', GB: 'GBP', YT: 'YouTube', LI: 'LinkedIn' };
    return `<span class="plat ${m[p] || ''}">${l[p] || p}</span>`;
  }

  function getEquipTags(c) {
    if (Array.isArray(c.equip) && c.equip.length) return c.equip;
    return CLIENT.defaultEquipment || ['📱 Phone (4K)', '🎥 Gimbal', '🎙️ Wireless Mic'];
  }

  function renderCard(c) {
    const t = window.TYPES[c.type] || { label: c.type, icon: '📌', bg: '#222', fg: '#9CBF9F' };
    const h = window.HASH[c.type] || '';
    const numDisp = typeof c.id === 'string' ? c.id : `#${c.id}`;
    const isStill = c.format === 'STILL';

    const prepList = (c.preprod || []).map(x => `<li>${x}</li>`).join('');
    const prodList = (c.prod || []).map(x => `<li>${x}</li>`).join('');
    const postList = (c.postprod || []).map(x => `<li>${x}</li>`).join('');
    const equipTags = getEquipTags(c).map(x => `<span class="equip-tag">${x}</span>`).join('');

    return `<div class="ccard" data-type="${c.type}" data-format="${c.format}" data-act="${c.act}" data-id="${c.id}">
    <div class="cc-top">
      <div class="cc-num">${numDisp}</div>
      <div class="cc-meta">
        <div class="cc-type-badge" style="background:${t.bg};color:${t.fg}">${t.icon} ${t.label}</div>
        ${isStill
          ? `<span class="cc-still-badge">🖼 STILL${CLIENT.stillPartnerLabel ? ' — ' + CLIENT.stillPartnerLabel : ''}</span>`
          : `<div class="cc-dur">📹 ${c.format} · ${c.dur || ''}</div>`}
      </div>
      <span class="${isStill ? 'cc-still-badge' : 'cc-format-badge'}">ACT ${c.act}</span>
    </div>
    <div class="cc-body">
      <div class="cc-title">${c.title}</div>
      <div class="cc-hook">${c.hook || ''}</div>
      <div class="cc-expand" id="exp-${c.id}">
        <div class="cc-section">
          <div class="cc-slabel">${isStill ? '🖼 Still Concept' : '📜 Script / Scene Direction'}</div>
          <div class="cc-script">${c.script || ''}</div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:8px;margin-bottom:8px">
          <div class="cc-section"><div class="cc-slabel">📋 Pre-Production</div><ul class="cc-points">${prepList}</ul></div>
          <div class="cc-section"><div class="cc-slabel">🎬 Production</div><ul class="cc-points">${prodList}</ul></div>
          <div class="cc-section"><div class="cc-slabel">✂️ Post-Production</div><ul class="cc-points">${postList}</ul></div>
        </div>
        <div class="cc-equip">
          <div class="cc-slabel">📱 Equipment</div>
          <div class="equip-row">${equipTags}</div>
        </div>
        <div class="cc-cta-bar">📣 CTA: ${c.cta || ''}</div>
        <div class="cc-hash">${c.hashtags || h}</div>
      </div>
    </div>
    <div class="cc-plats">${(c.plat || []).map(platTag).join('')}</div>
    <button class="cc-toggle" onclick="toggleCard('${c.id}',this)">
      <span>▾ Show Details</span><span class="arrow" id="arr-${c.id}">▾</span>
    </button>
    <button class="done-btn" id="done-btn-${c.id}" onclick="toggleDone('${c.id}',this)">
      <span class="done-check" id="done-check-${c.id}"></span>
      <span id="done-label-${c.id}">Mark as Done</span>
    </button>
  </div>`;
  }
  window.renderCard = renderCard;

  function toggleCard(id, btn) {
    const exp = document.getElementById('exp-' + id);
    const arr = document.getElementById('arr-' + id);
    if (!exp) return;
    const isOpen = exp.classList.contains('open');
    exp.classList.toggle('open', !isOpen);
    if (arr) arr.classList.toggle('open', !isOpen);
    btn.querySelector('span').textContent = isOpen ? '▾ Show Details' : '▲ Hide Details';
  }
  window.toggleCard = toggleCard;

  function renderActivation(actNum, posts) {
    const totalVid = posts.filter(p => p.format === 'VIDEO').length;
    const totalStill = posts.filter(p => p.format === 'STILL').length;
    const focus = (CLIENT.activationFocus && CLIENT.activationFocus[actNum]) || `Activation ${actNum}`;
    const hrs = CLIENT.hoursPerActivation || '~2';
    return `
    <div class="act-hdr">Activation ${actNum}
      <span class="act-sub">Focus: ${focus} · ~${hrs} hours on-site</span>
    </div>
    <div class="act-meta">
      <div class="act-tag">📹 <span>${totalVid}</span> Video Posts</div>
      ${totalStill ? `<div class="act-tag">🖼 <span>${totalStill}</span> Still Posts</div>` : ''}
      <div class="act-tag">⏱ <span>~${hrs}</span> Hours</div>
    </div>
    <div class="cgrid">${posts.map(c => renderCardWithOverride(c)).join('')}</div>`;
  }

  function buildCalendar() {
    const body = document.getElementById('calendar-body');
    if (!body) return;
    const acts = Array.from(new Set(window.CONTENT.map(c => c.act))).sort((a, b) => a - b);
    let html = '';
    acts.forEach(a => {
      const posts = window.CONTENT.filter(c => c.act === a);
      html += renderActivation(a, posts);
    });
    body.innerHTML = html;
    applyFilter();
  }
  window.buildCalendar = buildCalendar;

  // ═══════════════════════════════════════════════
  // PRODUCTION GUIDE RENDER
  // ═══════════════════════════════════════════════
  function renderWFCard(data) {
    const steps = (data.steps || []).map((s, i) => `
      <div class="wf-step">
        <div class="step-num">${i + 1}</div>
        <div class="step-text"><strong>${s.t}</strong>${s.d}</div>
      </div>`).join('');
    return `<div class="wf-card">
      <div class="wf-hdr"><div class="wf-icon">${data.icon || '📌'}</div>
        <div><div class="wf-title">${data.title}</div>
        <div class="wf-sub">${data.sub || ''}</div></div></div>
      <div class="wf-body">${steps}</div>
    </div>`;
  }

  const DEFAULT_SOFTWARE = {
    icon: '💻', title: 'Software Stack', sub: 'Tools used across VenPro production',
    steps: [
      { t: 'CapCut (Free)', d: 'Primary mobile video editor — auto-captions, trending audio sync, speed ramps, text animations.' },
      { t: 'Canva (Free/Pro)', d: 'Branded graphics, still posts, and CTA screens.' },
      { t: 'Google Drive (Free)', d: 'Central file hub — editor uploads, Audrey accesses, client reviews.' },
      { t: 'Metricool (Paid — Audrey Manages)', d: 'Content scheduling to IG, FB, TikTok, GBP, plus analytics.' },
      { t: 'Frame.io / WeTransfer', d: 'Large file delivery with timestamp comments.' },
    ]
  };

  function buildProduction() {
    const eq = document.getElementById('equip-grid');
    const pp = document.getElementById('preprod-grid');
    const pr = document.getElementById('prod-grid');
    const po = document.getElementById('postprod-grid');
    const sw = document.getElementById('software-grid');
    if (eq) eq.innerHTML = (window.EQUIPMENT || []).map(renderWFCard).join('');
    if (pp) pp.innerHTML = (window.PREPROD || []).map(renderWFCard).join('');
    if (pr) pr.innerHTML = (window.PRODUCTION || []).map(renderWFCard).join('');
    if (po) po.innerHTML = (window.POSTPROD || []).map(renderWFCard).join('');
    if (sw) sw.innerHTML = renderWFCard(window.SOFTWARE_STACK || DEFAULT_SOFTWARE);
  }
  window.buildProduction = buildProduction;

  // ═══════════════════════════════════════════════
  // APPROVAL WORKFLOW RENDER
  // ═══════════════════════════════════════════════
  const DEFAULT_FLOW = [
    { icon: '✂️', title: 'Editor', desc: 'Edits + exports all content. Names files. Writes captions.', badge: 'VenPro Team' },
    { icon: '📤', title: 'Upload to Drive', desc: 'Organized by Activation. Captions + assets included.', badge: null },
    { icon: '📧', title: 'Notify Audrey', desc: 'Email/message: "Content ready — [X] pieces in Drive."', badge: null },
    { icon: '📅', title: 'Audrey → Metricool', desc: 'Inputs all content, captions, hashtags + schedule times.', badge: 'Scheduler' },
    { icon: '👁️', title: 'Client Review', desc: 'Client reviews via preview link. 48hr window.', badge: 'Final Approval' },
    { icon: '🚀', title: 'Goes Live', desc: 'Metricool auto-publishes on schedule.', badge: 'Published' },
  ];

  function buildApproval() {
    const flow = window.APPROVAL_FLOW || DEFAULT_FLOW;
    const flowHTML = flow.map((f, i) => `
      <div class="af-step${f.badge === 'Final Approval' ? ' highlight' : ''}">
        <div class="af-icon">${f.icon}</div>
        <div class="af-title">${f.title}</div>
        <div class="af-desc">${f.desc}</div>
        ${f.badge ? `<div class="af-badge">${f.badge}</div>` : ''}
      </div>
      ${i < flow.length - 1 ? '<div class="af-arrow">→</div>' : ''}`).join('');
    const flowEl = document.getElementById('approval-flow');
    if (flowEl) flowEl.innerHTML = flowHTML;
    const stepsEl = document.getElementById('approval-steps');
    if (stepsEl) stepsEl.innerHTML = (window.APPROVAL_STEPS || []).map(renderWFCard).join('');
    const metaEl = document.getElementById('metricool-guide');
    if (metaEl) metaEl.innerHTML = (window.METRICOOL_GUIDE || []).map(renderWFCard).join('');
  }
  window.buildApproval = buildApproval;

  // ═══════════════════════════════════════════════
  // STATS RENDER
  // ═══════════════════════════════════════════════
  function buildStats() {
    const CONTENT = window.CONTENT;
    const totalVideo = CONTENT.filter(c => c.format === 'VIDEO').length;
    const totalStill = CONTENT.filter(c => c.format === 'STILL').length;
    const acts = Array.from(new Set(CONTENT.map(c => c.act))).sort((a, b) => a - b);

    const stats = [{ n: CONTENT.length, l: 'Total Posts' }];
    if (totalVideo) stats.push({ n: totalVideo, l: 'Video Posts' });
    if (totalStill) stats.push({ n: totalStill, l: (CLIENT.stillPartnerLabel || 'Still Posts') });
    stats.push({ n: acts.length, l: 'Activations' });
    if (CLIENT.hoursPerActivation) stats.push({ n: CLIENT.hoursPerActivation + 'h', l: 'Hours/Activation' });
    if (CLIENT.budgetLabel) stats.push({ n: CLIENT.budgetLabel, l: CLIENT.budgetName || 'Monthly Budget' });

    const statsEl = document.getElementById('stats-grid');
    if (statsEl) statsEl.innerHTML = stats.map(s => `<div class="stat-box"><div class="stat-num">${s.n}</div><div class="stat-lbl">${s.l}</div></div>`).join('');

    const pillarKeys = Object.keys(window.TYPES);
    const pillarsHTML = pillarKeys.map(key => {
      const t = window.TYPES[key];
      const count = CONTENT.filter(c => c.type === key).length;
      const pct = CONTENT.length ? (count / CONTENT.length * 100).toFixed(0) : 0;
      return `<div class="pillar-bar-row">
        <div class="pillar-bar-label">${t.icon} ${t.label}</div>
        <div class="pillar-bar-track"><div class="pillar-bar-fill" style="width:${pct}%;background:${t.fg}"></div></div>
        <div class="pillar-bar-count">${count} posts</div>
      </div>`;
    }).join('');
    const pillarsEl = document.getElementById('pillar-bars');
    if (pillarsEl) pillarsEl.innerHTML = pillarsHTML;

    const schedEl = document.getElementById('act-sched');
    if (schedEl) {
      const schedHTML = acts.map(a => {
        const posts = CONTENT.filter(c => c.act === a);
        const vid = posts.filter(p => p.format === 'VIDEO').length;
        const still = posts.filter(p => p.format === 'STILL').length;
        const focus = (CLIENT.activationFocus && CLIENT.activationFocus[a]) || `Activation ${a}`;
        return `<div class="wf-card" style="margin-bottom:12px">
          <div class="wf-hdr">
            <div class="wf-icon">🎬</div>
            <div><div class="wf-title">Activation ${a} — ${focus}</div>
            <div class="wf-sub">${vid} Video Posts${still ? ' · ' + still + ' Still Posts' : ''} · ~${CLIENT.hoursPerActivation || '2'} hours on-site</div></div>
          </div>
        </div>`;
      }).join('');
      schedEl.innerHTML = schedHTML;
    }
  }
  window.buildStats = buildStats;

  // ═══════════════════════════════════════════════
  // MULTI-USER ATTRIBUTION + DONE TRACKING
  // ═══════════════════════════════════════════════
  const TEAM_MEMBERS = window.TEAM_MEMBERS || [];
  const DONE_PATH = SLUG + '_done';
  const LS_KEY = SLUG + '_done_v1';
  const USER_KEY = 'venpro_user'; // shared across all client pages so you pick your name once

  window._currentUser = localStorage.getItem(USER_KEY) || null;
  window._doneState = JSON.parse(localStorage.getItem(LS_KEY) || '{}');
  window._db = null;

  try {
    if (window.FIREBASE_DATABASE_URL && window.FIREBASE_DATABASE_URL.indexOf('PASTE_YOUR') === -1) {
      const fbApp = firebase.apps.length ? firebase.app() : firebase.initializeApp({ databaseURL: window.FIREBASE_DATABASE_URL });
      window._db = fbApp.database();
      window._db.ref(DONE_PATH).on('value', snapshot => {
        window._doneState = snapshot.val() || {};
        localStorage.setItem(LS_KEY, JSON.stringify(window._doneState));
        applyDoneState(window._doneState);
      }, () => {});
    }
  } catch (e) { console.warn('Firebase init failed', e); }

  function getMember(uid) { return TEAM_MEMBERS.find(m => m.id === uid); }
  window.getMember = getMember;

  function showUserPicker() {
    let modal = document.getElementById('user-picker-modal');
    if (modal) { modal.style.display = 'flex'; return; }
    modal = document.createElement('div');
    modal.id = 'user-picker-modal';
    modal.className = 'up-modal';
    modal.innerHTML = `
      <div class="up-card">
        <div class="up-title">who's working today?</div>
        <div class="up-sub">pick your name. anything you mark done or add gets tagged with your color so the team can see who did it.</div>
        <div class="up-list">
          ${TEAM_MEMBERS.map(m => `<button class="up-btn" style="background:${m.color}" onclick="setCurrentUser('${m.id}')">
            <span class="up-avatar">${m.initial}</span>${m.name}
          </button>`).join('')}
        </div>
        <div class="up-foot">this is shared across every client page — pick once.</div>
      </div>`;
    document.body.appendChild(modal);
  }
  window.showUserPicker = showUserPicker;

  function hideUserPicker() { const modal = document.getElementById('user-picker-modal'); if (modal) modal.style.display = 'none'; }
  window.hideUserPicker = hideUserPicker;

  function setCurrentUser(uid) {
    if (!getMember(uid)) return;
    window._currentUser = uid;
    localStorage.setItem(USER_KEY, uid);
    hideUserPicker();
    renderCurrentUserBadge();
    applyDoneState(window._doneState);
  }
  window.setCurrentUser = setCurrentUser;

  function switchUser() { showUserPicker(); }
  window.switchUser = switchUser;

  function renderCurrentUserBadge() {
    const el = document.getElementById('current-user-badge');
    if (!el) return;
    const m = getMember(window._currentUser);
    if (!m) { el.innerHTML = '<button class="nav-btn" onclick="switchUser()" style="background:#FF6B6B;color:#0a0a0a;">👤 pick user</button>'; return; }
    el.innerHTML = `<button class="nav-btn" onclick="switchUser()" style="background:${m.color};color:#0a0a0a;">
      <span style="background:rgba(0,0,0,.25);border-radius:50%;width:18px;height:18px;display:inline-flex;align-items:center;justify-content:center;font-weight:800;font-size:10px;margin-right:6px;">${m.initial}</span>${m.name}
    </button>`;
  }

  function toggleDone(id, btn) {
    if (!window._currentUser) { showUserPicker(); return; }
    const state = window._doneState || {};
    const currentMark = state[id];
    let newValue;
    if (!currentMark) newValue = window._currentUser;
    else if (currentMark === true || currentMark === window._currentUser) newValue = null;
    else newValue = window._currentUser;
    if (newValue) state[id] = newValue; else delete state[id];
    window._doneState = state;
    localStorage.setItem(LS_KEY, JSON.stringify(state));
    applyDoneState(state);
    if (window._db) {
      if (newValue) window._db.ref(DONE_PATH + '/' + id).set(newValue).catch(() => {});
      else window._db.ref(DONE_PATH + '/' + id).remove().catch(() => {});
    }
  }
  window.toggleDone = toggleDone;

  function applyDoneState(state) {
    const cards = document.querySelectorAll('.ccard');
    let doneCount = 0;
    const memberCounts = {};
    TEAM_MEMBERS.forEach(m => memberCounts[m.id] = 0);
    cards.forEach(card => {
      const id = card.dataset.id;
      const mark = state[id];
      const done = !!mark;
      card.classList.toggle('done', done);
      const btn = document.getElementById('done-btn-' + id);
      const check = document.getElementById('done-check-' + id);
      const label = document.getElementById('done-label-' + id);
      let memberObj = null;
      if (typeof mark === 'string') memberObj = getMember(mark);
      if (btn) {
        btn.classList.toggle('checked', done);
        if (memberObj) { btn.style.background = memberObj.color + '22'; btn.style.color = memberObj.color; btn.style.borderTopColor = memberObj.color; }
        else { btn.style.background = ''; btn.style.color = ''; btn.style.borderTopColor = ''; }
      }
      if (check) {
        if (memberObj) { check.textContent = memberObj.initial; check.style.background = memberObj.color; check.style.borderColor = memberObj.color; check.style.color = '#0a0a0a'; }
        else if (done) { check.textContent = '✓'; check.style.background = '#43a047'; check.style.borderColor = '#43a047'; check.style.color = '#fff'; }
        else { check.textContent = ''; check.style.background = ''; check.style.borderColor = ''; check.style.color = ''; }
      }
      if (label) {
        if (memberObj) label.textContent = `done by ${memberObj.name}`;
        else if (done) label.textContent = 'completed ✓';
        else label.textContent = 'mark as done';
      }
      if (done) { doneCount++; if (memberObj) memberCounts[memberObj.id]++; }
    });
    const total = window.CONTENT.length + Object.keys(window._customVideos || {}).length;
    const pct = total ? (doneCount / total * 100).toFixed(0) : 0;
    const countEl = document.getElementById('done-count');
    const totalEl = document.getElementById('done-total');
    const fillEl = document.getElementById('done-progress-fill');
    if (countEl) countEl.textContent = doneCount;
    if (totalEl) totalEl.textContent = total;
    if (fillEl) fillEl.style.width = pct + '%';
    const tally = document.getElementById('member-tally');
    if (tally) {
      tally.innerHTML = TEAM_MEMBERS.map(m => `<span style="display:inline-flex;align-items:center;gap:4px;background:${m.color}22;color:${m.color};padding:3px 8px;border-radius:5px;font-size:11px;font-weight:700;letter-spacing:.04em;">
        <span style="background:${m.color};color:#0a0a0a;border-radius:50%;width:14px;height:14px;display:inline-flex;align-items:center;justify-content:center;font-size:9px;font-weight:800;">${m.initial}</span>
        ${memberCounts[m.id]}
      </span>`).join('');
    }
  }
  window.applyDoneState = applyDoneState;

  function resetAllDone() {
    if (!confirm('clear all checkmarks and reset progress?')) return;
    window._doneState = {};
    localStorage.removeItem(LS_KEY);
    applyDoneState({});
    if (window._db) window._db.ref(DONE_PATH).remove().catch(() => {});
  }
  window.resetAllDone = resetAllDone;

  let showingDoneOnly = false;
  function filterDone() {
    showingDoneOnly = !showingDoneOnly;
    const btn = document.getElementById('done-filter-btn');
    if (btn) { btn.classList.toggle('active', showingDoneOnly); btn.textContent = showingDoneOnly ? '✅ All Done' : '✅ Done'; }
    if (!showingDoneOnly) { applyFilter(); return; }
    const state = window._doneState || {};
    let vis = 0;
    document.querySelectorAll('.ccard').forEach(card => {
      const hide = !state[card.dataset.id];
      card.classList.toggle('hidden', hide);
      if (!hide) vis++;
    });
    const vc = document.getElementById('visible-count');
    if (vc) vc.innerHTML = `${vis} <em>Showing</em>`;
    const nr = document.getElementById('no-res');
    if (nr) nr.classList.toggle('show', vis === 0);
  }
  window.filterDone = filterDone;

  // ═══════════════════════════════════════════════
  // CUSTOM / AD-HOC VIDEOS — editors + production add their own ideas
  // ═══════════════════════════════════════════════
  const CUSTOM_PATH = SLUG + '_custom';
  const CUSTOM_LS = SLUG + '_custom_v1';
  window._customVideos = JSON.parse(localStorage.getItem(CUSTOM_LS) || '{}');

  const CUSTOM_TYPE_LABELS = {
    PODCAST: '🎙 Podcast', BTS: '🎬 BTS', ADHOC: '⚡ Ad-Hoc',
    EVENT: '📍 Event', GUEST: '🤝 Guest / Collab', IDEA: '💡 New Idea', CUSTOM: '✨ Custom'
  };

  if (window._db) {
    window._db.ref(CUSTOM_PATH).on('value', snap => {
      window._customVideos = snap.val() || {};
      localStorage.setItem(CUSTOM_LS, JSON.stringify(window._customVideos));
      renderCustomVideos();
    }, () => {});
  }

  function showAddCustomModal(editId) {
    if (!window._currentUser) { showUserPicker(); return; }
    const modal = document.getElementById('cv-modal');
    const title = document.getElementById('cv-modal-title');
    document.getElementById('cv-id').value = editId || '';
    if (editId && window._customVideos[editId]) {
      const v = window._customVideos[editId];
      title.textContent = 'Edit video idea';
      document.getElementById('cv-title').value = v.title || '';
      document.getElementById('cv-type').value = v.type || 'IDEA';
      document.getElementById('cv-hook').value = v.hook || '';
      document.getElementById('cv-date').value = v.date || new Date().toISOString().slice(0, 10);
      document.getElementById('cv-notes').value = v.notes || '';
      const plats = v.plat || [];
      document.querySelectorAll('#cv-platforms label').forEach(lab => {
        const cb = lab.querySelector('input');
        cb.checked = plats.includes(cb.value);
        lab.classList.toggle('checked', cb.checked);
      });
    } else {
      title.textContent = 'Add your own video idea';
      ['cv-title', 'cv-hook', 'cv-notes'].forEach(id => document.getElementById(id).value = '');
      document.getElementById('cv-type').value = 'IDEA';
      document.getElementById('cv-date').value = new Date().toISOString().slice(0, 10);
      document.querySelectorAll('#cv-platforms label').forEach(lab => {
        const cb = lab.querySelector('input');
        cb.checked = (cb.value === 'IG');
        lab.classList.toggle('checked', cb.checked);
      });
    }
    modal.classList.add('show');
  }
  window.showAddCustomModal = showAddCustomModal;

  function hideAddCustomModal() { document.getElementById('cv-modal').classList.remove('show'); }
  window.hideAddCustomModal = hideAddCustomModal;

  document.addEventListener('change', e => {
    if (e.target.matches('#cv-platforms input')) e.target.parentElement.classList.toggle('checked', e.target.checked);
  });

  function saveCustomVideo() {
    const idField = document.getElementById('cv-id').value;
    const title = document.getElementById('cv-title').value.trim();
    if (!title) { alert('Title is required.'); return; }
    const type = document.getElementById('cv-type').value;
    const hook = document.getElementById('cv-hook').value.trim();
    const date = document.getElementById('cv-date').value;
    const notes = document.getElementById('cv-notes').value.trim();
    const plats = Array.from(document.querySelectorAll('#cv-platforms input:checked')).map(c => c.value);
    const id = idField || ('custom-' + Date.now());
    const existing = window._customVideos[id] || {};
    const video = {
      id, title, type, hook, date, notes, plat: plats,
      createdBy: existing.createdBy || window._currentUser,
      createdAt: existing.createdAt || Date.now(),
      updatedBy: window._currentUser,
      updatedAt: Date.now()
    };
    window._customVideos[id] = video;
    localStorage.setItem(CUSTOM_LS, JSON.stringify(window._customVideos));
    renderCustomVideos();
    if (window._db) window._db.ref(CUSTOM_PATH + '/' + id).set(video).catch(() => {});
    hideAddCustomModal();
  }
  window.saveCustomVideo = saveCustomVideo;

  function deleteCustomVideo(id) {
    if (!confirm('Delete this video idea? This will sync to the team.')) return;
    delete window._customVideos[id];
    localStorage.setItem(CUSTOM_LS, JSON.stringify(window._customVideos));
    renderCustomVideos();
    if (window._db) window._db.ref(CUSTOM_PATH + '/' + id).remove().catch(() => {});
  }
  window.deleteCustomVideo = deleteCustomVideo;

  function editCustomVideo(id) { showAddCustomModal(id); }
  window.editCustomVideo = editCustomVideo;

  function renderCustomVideos() {
    const grid = document.getElementById('custom-videos-grid');
    if (!grid) return;
    const videos = Object.values(window._customVideos || {}).sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
    if (videos.length === 0) {
      grid.innerHTML = '<div class="empty-state">No ideas logged yet. Click <b style="color:var(--accent)">＋ Add Video</b> above — editors and production can drop podcasts, BTS, or any idea that wasn\'t on the planned calendar.</div>';
      return;
    }
    grid.innerHTML = '<div class="cgrid">' + videos.map(v => {
      const creator = (TEAM_MEMBERS.find(m => m.id === v.createdBy) || { name: '?', color: '#666', initial: '?' });
      const platHTML = (v.plat || []).map(p => `<span class="plat ${({ IG: 'p-ig', FB: 'p-fb', TT: 'p-tt', GB: 'p-gb', YT: 'p-yt', LI: 'p-li' })[p] || ''}">${({ IG: 'Instagram', FB: 'Facebook', TT: 'TikTok', GB: 'GBP', YT: 'YouTube', LI: 'LinkedIn' })[p] || p}</span>`).join('');
      const niceDate = v.date ? new Date(v.date + 'T12:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) : '';
      return `<div class="ccard custom" data-id="${v.id}" data-type="CUSTOM" data-format="VIDEO">
        <div class="cc-top">
          <div class="cc-num">💡</div>
          <div class="cc-meta">
            <div class="cc-type-badge" style="background:#1a2a1a;color:var(--accent)">${CUSTOM_TYPE_LABELS[v.type] || 'Idea'}</div>
            <div class="cc-dur">📅 ${niceDate}</div>
          </div>
          <span class="cc-format-badge" title="Logged by">${creator.initial}</span>
        </div>
        <div class="cc-custom-meta">
          <span style="background:${creator.color}22;color:${creator.color};border-color:${creator.color}">added by ${creator.name}</span>
          ${v.updatedBy && v.updatedBy !== v.createdBy ? `<span>edited by ${(TEAM_MEMBERS.find(m => m.id === v.updatedBy) || { name: '?' }).name}</span>` : ''}
        </div>
        <div class="cc-body">
          <div class="cc-title">${v.title}</div>
          ${v.hook ? `<div class="cc-hook">${v.hook}</div>` : ''}
          ${v.notes ? `<div class="cc-section" style="margin-top:6px"><div class="cc-slabel">📝 Notes</div><div class="cc-script">${v.notes}</div></div>` : ''}
        </div>
        <div class="cc-plats">${platHTML}</div>
        <div class="cc-custom-actions">
          <button onclick="editCustomVideo('${v.id}')">✏️ Edit</button>
          <button class="delete" onclick="deleteCustomVideo('${v.id}')">🗑 Delete</button>
        </div>
        <button class="done-btn" id="done-btn-${v.id}" onclick="toggleDone('${v.id}',this)">
          <span class="done-check" id="done-check-${v.id}"></span>
          <span id="done-label-${v.id}">mark as done</span>
        </button>
      </div>`;
    }).join('') + '</div>';
    applyDoneState(window._doneState || {});
  }
  window.renderCustomVideos = renderCustomVideos;

  // ═══════════════════════════════════════════════
  // EDIT-BASE OVERRIDE SYSTEM — edit any existing calendar post live
  // ═══════════════════════════════════════════════
  const OVERRIDE_PATH = SLUG + '_overrides';
  const OVERRIDE_LS = SLUG + '_overrides_v1';
  window._overrides = JSON.parse(localStorage.getItem(OVERRIDE_LS) || '{}');

  function cleanForFirebase(v) {
    if (v === undefined || v === null) return null;
    if (typeof v === 'number' && isNaN(v)) return null;
    if (Array.isArray(v)) return v.map(cleanForFirebase).filter(x => x !== null && x !== undefined);
    if (typeof v === 'object') { const o = {}; Object.keys(v).forEach(k => { const c = cleanForFirebase(v[k]); if (c !== null && c !== undefined) o[k] = c; }); return o; }
    return v;
  }

  function applyOverride(c) {
    const ov = window._overrides && window._overrides[c.id];
    if (!ov || typeof ov !== 'object') return c;
    const m = Object.assign({}, c, ov, { id: c.id, _edited: true });
    ['plat', 'preprod', 'prod', 'postprod'].forEach(k => { if (m[k] && !Array.isArray(m[k])) m[k] = Object.values(m[k]).filter(v => typeof v === 'string'); });
    return m;
  }

  function renderCardWithOverride(c) {
    const e = applyOverride(c);
    let h = renderCard(e);
    const ed = e._editedBy ? getMember(e._editedBy) : null;
    const ea = e._editedAt ? timeAgo(e._editedAt) : '';
    const eb = `<button class="eb-edit-btn" onclick="event.stopPropagation();showEditBaseModal('${e.id}')" title="Edit this post">✎</button>`;
    let ch = '';
    if (e._edited && ed) ch = `<span class="eb-edited-chip"><span class="ec-dot" style="background:${ed.color}">${ed.initial}</span>EDITED · ${ed.name}${ea ? ' · ' + ea : ''}</span>`;
    else if (e._edited) ch = `<span class="eb-edited-chip">EDITED${ea ? ' · ' + ea : ''}</span>`;
    h = h.replace(/(<div class="ccard"[^>]*>)/, '$1' + eb);
    if (ch) h = h.replace(/(<div class="cc-title">)([^<]*)(<\/div>)/, '$1$2 ' + ch + '$3');
    return h;
  }

  function timeAgo(ts) {
    if (!ts) return '';
    const s = Math.max(1, Math.floor((Date.now() - ts) / 1000));
    if (s < 60) return s + 's ago';
    const m = Math.floor(s / 60); if (m < 60) return m + 'm ago';
    const h = Math.floor(m / 60); if (h < 24) return h + 'h ago';
    return Math.floor(h / 24) + 'd ago';
  }

  function initOverridesSync() {
    if (!window._db) { setTimeout(initOverridesSync, 300); return; }
    window._db.ref(OVERRIDE_PATH).on('value', snap => {
      window._overrides = snap.val() || {};
      localStorage.setItem(OVERRIDE_LS, JSON.stringify(window._overrides));
      buildCalendar();
      applyDoneState(window._doneState || {});
    }, err => console.warn('FB override sync failed', err));
  }
  setTimeout(initOverridesSync, 300);

  function showEditBaseModal(id) {
    if (!window._currentUser) { showUserPicker(); return; }
    const b = window.CONTENT.find(c => String(c.id) === String(id));
    if (!b) { alert('Could not find post #' + id); return; }
    const e = applyOverride(b);
    document.getElementById('eb-title').textContent = e._edited ? 'Edit post #' + id + ' (currently edited)' : 'Edit post #' + id;
    document.getElementById('eb-id').value = id;
    document.getElementById('eb-title-input').value = e.title || '';
    document.getElementById('eb-type').value = e.type || '';
    document.getElementById('eb-format').value = e.format || 'VIDEO';
    document.getElementById('eb-act').value = e.act != null ? e.act : '';
    document.getElementById('eb-dur').value = e.dur || '';
    document.getElementById('eb-hook').value = e.hook || '';
    document.getElementById('eb-script').value = e.script || '';
    document.getElementById('eb-preprod').value = (e.preprod || []).join('\n');
    document.getElementById('eb-prod').value = (e.prod || []).join('\n');
    document.getElementById('eb-postprod').value = (e.postprod || []).join('\n');
    document.getElementById('eb-cta').value = e.cta || '';
    const ps = e.plat || [];
    document.querySelectorAll('#eb-platforms label').forEach(l => { const cb = l.querySelector('input'); cb.checked = ps.includes(cb.value); l.classList.toggle('checked', cb.checked); });
    document.getElementById('eb-modal').classList.add('show');
  }
  window.showEditBaseModal = showEditBaseModal;

  function hideEditBaseModal() { document.getElementById('eb-modal').classList.remove('show'); }
  window.hideEditBaseModal = hideEditBaseModal;

  document.addEventListener('change', e => { if (e.target.matches('#eb-platforms input')) e.target.parentElement.classList.toggle('checked', e.target.checked); });

  function saveBaseEdit() {
    const id = document.getElementById('eb-id').value;
    if (!id) { alert('Missing id'); return; }
    const t = document.getElementById('eb-title-input').value.trim();
    if (!t) { alert('Title required.'); return; }
    const sp = s => (s || '').split('\n').map(x => x.trim()).filter(Boolean);
    const av = document.getElementById('eb-act').value.trim();
    const d = {
      title: t,
      type: document.getElementById('eb-type').value.trim(),
      format: document.getElementById('eb-format').value,
      act: isNaN(parseInt(av, 10)) ? av : parseInt(av, 10),
      dur: document.getElementById('eb-dur').value.trim(),
      hook: document.getElementById('eb-hook').value.trim(),
      script: document.getElementById('eb-script').value,
      preprod: sp(document.getElementById('eb-preprod').value),
      prod: sp(document.getElementById('eb-prod').value),
      postprod: sp(document.getElementById('eb-postprod').value),
      cta: document.getElementById('eb-cta').value.trim(),
      plat: Array.from(document.querySelectorAll('#eb-platforms input:checked')).map(c => c.value),
      _editedBy: window._currentUser || 'unknown',
      _editedAt: Date.now()
    };
    Object.keys(d).forEach(k => { if (d[k] === undefined || d[k] === '' || (Array.isArray(d[k]) && d[k].length === 0 && !['preprod', 'prod', 'postprod', 'plat'].includes(k))) delete d[k]; });
    window._overrides[id] = d;
    localStorage.setItem(OVERRIDE_LS, JSON.stringify(window._overrides));
    hideEditBaseModal();
    buildCalendar();
    applyDoneState(window._doneState || {});
    if (window._db) window._db.ref(OVERRIDE_PATH + '/' + id).set(cleanForFirebase(d)).catch(err => alert('Firebase save failed: ' + (err.message || err)));
  }
  window.saveBaseEdit = saveBaseEdit;

  function revertBaseEdit() {
    const id = document.getElementById('eb-id').value;
    if (!id) return;
    if (!confirm('Revert post #' + id + '? Pushes revert to the team.')) return;
    delete window._overrides[id];
    localStorage.setItem(OVERRIDE_LS, JSON.stringify(window._overrides));
    hideEditBaseModal();
    buildCalendar();
    applyDoneState(window._doneState || {});
    if (window._db) window._db.ref(OVERRIDE_PATH + '/' + id).remove().catch(() => {});
  }
  window.revertBaseEdit = revertBaseEdit;

  // ═══════════════════════════════════════════════
  // TABS + NAV
  // ═══════════════════════════════════════════════
  function showTab(id, el) {
    document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.getElementById('tab-' + id).classList.add('active');
    const btn = el || document.querySelector(`[data-tab="${id}"]`);
    if (btn) btn.classList.add('active');
  }
  window.showTab = showTab;

  function scrollToTop() { window.scrollTo({ top: 0, behavior: 'smooth' }); }
  window.scrollToTop = scrollToTop;

  // ═══════════════════════════════════════════════
  // INIT
  // ═══════════════════════════════════════════════
  window.addEventListener('DOMContentLoaded', () => {
    renderHeader();
    renderBanner();
    renderFilterButtons();
    buildCalendar();
    buildProduction();
    buildApproval();
    buildStats();
    renderCurrentUserBadge();
    if (!window._currentUser) showUserPicker();
    renderCustomVideos();
    applyDoneState(window._doneState);
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', () => showTab(btn.dataset.tab, btn));
    });
    const searchEl = document.getElementById('search-input');
    if (searchEl) searchEl.addEventListener('input', e => doSearch(e.target.value));
    setInterval(() => { buildCalendar(); applyDoneState(window._doneState || {}); }, 60000);
  });
})();
