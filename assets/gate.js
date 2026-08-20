/* ═══════════════════════════════════════════════
   PASSWORD GATE — shared across every page.
   Loaded in <head>, before anything else, so the page stays
   hidden behind the lock screen until the right password is
   entered once per browser (remembered via localStorage).
   ═══════════════════════════════════════════════ */
(function () {
  const KEY = 'venpro_site_unlocked';

  function isUnlocked() {
    return localStorage.getItem(KEY) === '1';
  }

  window.lockSite = function () {
    localStorage.removeItem(KEY);
    location.reload();
  };

  if (isUnlocked()) return;

  // Hide everything until the gate is passed, to avoid a flash of content.
  document.documentElement.style.visibility = 'hidden';

  window.addEventListener('DOMContentLoaded', function () {
    const overlay = document.createElement('div');
    overlay.className = 'gate-overlay';
    overlay.innerHTML = `
      <div class="gate-card">
        <div class="gate-title">🔒 VenPro Content Calendars</div>
        <div class="gate-sub">Enter the team password to continue.</div>
        <input type="password" id="gate-pass" placeholder="Password" autocomplete="off" />
        <button id="gate-submit" type="button">Unlock</button>
        <div class="gate-err" id="gate-err">Wrong password — try again.</div>
      </div>`;
    document.body.appendChild(overlay);
    document.documentElement.style.visibility = 'visible';

    const input = document.getElementById('gate-pass');
    const err = document.getElementById('gate-err');
    input.focus();

    function tryUnlock() {
      const val = input.value;
      if (typeof window.SITE_PASSWORD === 'string' && window.SITE_PASSWORD && val === window.SITE_PASSWORD) {
        localStorage.setItem(KEY, '1');
        overlay.remove();
      } else {
        err.classList.add('show');
        input.value = '';
        input.focus();
      }
    }
    document.getElementById('gate-submit').addEventListener('click', tryUnlock);
    input.addEventListener('keydown', function (e) { if (e.key === 'Enter') tryUnlock(); });
  });
})();
