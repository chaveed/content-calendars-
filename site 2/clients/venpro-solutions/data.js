/* ═══════════════════════════════════════════════
   VENPRO SOLUTIONS — data.js
   STARTER SET — VenPro's own brand content calendar.
   Replace CONTENT with real content ideas / ad campaigns.
   ═══════════════════════════════════════════════ */

window.CLIENT = {
  slug: 'venprosolutions',
  brandName: 'VenPro Solutions',
  brandSub: 'Agency Content Calendar',
  monogram: 'VP',
  logoIcon: '🎥',
  accent: '#4FC3F7',
  accent2: '#2196F3',
  accentlt: '#0d2733',
  footerLine: 'AI-Driven Marketing, Video Production &amp; Live Streaming — El Paso, TX',
  activationFocus: { 1: 'Client Showcase + Culture' },
  hoursPerActivation: 2,
  defaultEquipment: ['📱 iPhone 17 Pro Max', '🎥 DJI Osmo Pocket 3', '🧑‍💻 AI Production Stack', '✂️ CapCut'],
  banner: '<b>Placeholder content — nothing real loaded yet.</b> This page is fully wired up (Firebase sync, editing, add-video) but the posts below are generic samples for VenPro\'s own brand. Send real content ideas / ad campaigns to replace them.',
};

window.TYPES = {
  SHOWCASE: { label: 'Client Work Showcase', icon: '🎬', bg: '#0d2733', fg: '#4FC3F7' },
  BTS:      { label: 'Behind the Scenes', icon: '🎥', bg: '#1a2020', fg: '#80deea' },
  CULTURE:  { label: 'Team & Culture', icon: '🤝', bg: '#1a2a1a', fg: '#9CBF9F' },
  EDUCATION:{ label: 'AI & Production Tips', icon: '💡', bg: '#2a2010', fg: '#FFE66D' },
  CAREERS:  { label: 'Careers & Internships', icon: '🎯', bg: '#2a1a10', fg: '#FF6B6B' },
};

window.HASH = {
  SHOWCASE: '#VenProSolutions #ElPaso #VideoProduction',
  BTS:      '#VenProSolutions #BehindTheScenes #ElPaso',
  CULTURE:  '#VenProSolutions #TeamCulture #ElPaso',
  EDUCATION:'#VenProSolutions #AIProduction #ContentTips',
  CAREERS:  '#VenProSolutions #ElPasoJobs #Internship',
};

window.CONTENT = [
  {
    id: 1, act: 1, type: 'SHOWCASE', format: 'VIDEO', dur: '20–30s', plat: ['IG', 'FB', 'LI'],
    title: '[SAMPLE] Client Spotlight Reel',
    hook: 'A fast-cut highlight of recent client work.',
    script: `[PLACEHOLDER SCRIPT] Montage of recent client deliverables — video snippets, before/after, results if shareable. Swap in real recent work.`,
    preprod: ['Pull best recent client clips (with permission to feature)'],
    prod: ['Compile from existing footage'],
    postprod: ['Fast-cut, branded end card'],
    cta: 'See what VenPro can build for you — link in bio.',
  },
  {
    id: 2, act: 1, type: 'BTS', format: 'VIDEO', dur: '15–20s', plat: ['IG', 'TT'],
    title: '[SAMPLE] On Set With the Team',
    hook: 'A quick behind-the-scenes look at a real shoot day.',
    script: `[PLACEHOLDER SCRIPT] Candid BTS clip from an actual production day — gear, crew, energy.`,
    preprod: ['Grab BTS footage during any client shoot'],
    prod: ['Phone, handheld, candid'],
    postprod: ['Quick cuts, trending audio'],
    cta: 'This is how the work gets made.',
  },
  {
    id: 3, act: 1, type: 'EDUCATION', format: 'VIDEO', dur: '20–30s', plat: ['IG', 'LI', 'TT'],
    title: '[SAMPLE] One AI Production Tip',
    hook: 'A quick, useful tip from the VenPro AI production stack.',
    script: `[PLACEHOLDER SCRIPT] Short educational tip — something genuinely useful about AI video tools, filmed talking-head or screen capture style.`,
    preprod: ['Pick one specific, concrete tip'],
    prod: ['Talking head or screen capture'],
    postprod: ['Captions, clean text overlay of the tip'],
    cta: 'Follow for more production tips.',
  },
  {
    id: 4, act: 1, type: 'CULTURE', format: 'VIDEO', dur: '15s', plat: ['IG', 'FB'],
    title: '[SAMPLE] Meet the Team',
    hook: 'Quick team member intro.',
    script: `[PLACEHOLDER SCRIPT] Fast, fun team member intro — name, role, one fun fact.`,
    preprod: ['Confirm team member willing to be on camera'],
    prod: ['Phone, natural office light'],
    postprod: ['Light captions, name lower-third'],
    cta: 'Meet the people behind the work.',
  },
];

window.EQUIPMENT = [
  { icon: '🧑‍💻', title: 'Full Production Stack', sub: 'Phone → AI → Broadcast', steps: [
    { t: 'Everyday capture', d: 'iPhone 17 Pro Max + DJI Osmo Pocket 3 for social/BTS content and quick client-facing pieces.' },
    { t: 'Full range', d: 'From phone-shot social content to multi-cam broadcast and AI-generated pieces (Higgsfield, ElevenLabs, CapCut, Synthesia, HeyGen), depending on the piece.' },
  ] },
];
window.PREPROD = [
  { icon: '📋', title: 'Weekly Content Lock', sub: 'Monday', steps: [
    { t: 'Topic pick', d: 'Pick one showcase, one BTS, one education, and rotate culture/careers weekly.' },
  ] },
];
window.PRODUCTION = [
  { icon: '🎥', title: 'Capture Opportunistically', sub: 'During client shoots', steps: [
    { t: 'BTS capture', d: 'Grab BTS + team content during any scheduled client production — don\'t schedule separate shoots for it.' },
  ] },
];
window.POSTPROD = [
  { icon: '✂️', title: 'Edit', sub: 'CapCut', steps: [
    { t: 'Tone', d: 'Confident, expert, still approachable — this is the agency\'s own voice.' },
  ] },
];

window.APPROVAL_STEPS = [
  { icon: '✂️', title: 'Editor → Internal Review', sub: 'VenPro Team', steps: [
    { t: 'Review', d: 'Internal sign-off — no external client approval needed for VenPro\'s own content.' },
  ] },
];
window.METRICOOL_GUIDE = [
  { icon: '📊', title: 'Scheduling', sub: 'Metricool', steps: [
    { t: 'Platforms', d: 'IG, FB, LinkedIn, TikTok.' },
  ] },
];
