/* ═══════════════════════════════════════════════
   HOMEBREW HAVEN (El Paso) — data.js
   STARTER SET — built from what's known: veteran/Hispanic-owned
   El Paso roastery, founders David & Tiffini Barraza, single-origin
   coffee from the Adjuntas mountains of Puerto Rico (Domenico Celli /
   Forgotten Forest, Centro Tanama). "From Origin to Ritual" script
   already exists — replace CONTENT with your real calendar.
   ═══════════════════════════════════════════════ */

window.CLIENT = {
  slug: 'homebrewhaven',
  brandName: 'Homebrew Haven',
  brandSub: 'Monthly Content Calendar',
  monogram: 'HB',
  logoIcon: '☕',
  accent: '#B8895A',
  accent2: '#96703f',
  accentlt: '#2a1f14',
  footerLine: 'Veteran &amp; Hispanic-Owned — Puerto Rico Origin Coffee',
  activationFocus: { 1: 'Origin Story + Product', 2: 'Founders + Community' },
  hoursPerActivation: 2.5,
  defaultEquipment: ['📱 iPhone 17 Pro Max', '🎥 DJI Osmo Pocket 3', '🎙️ Wireless Mic'],
  banner: '<b>Starter set.</b> You already have a real "From Origin to Ritual" script/shot list and a founders podcast video in progress — replace CONTENT below with the real calendar, or add posts live on the page.',
};

window.TYPES = {
  ORIGIN:  { label: 'Origin Story', icon: '🌋', bg: '#241a10', fg: '#B8895A' },
  CRAFT:   { label: 'Roasting & Craft', icon: '🔥', bg: '#2a1a10', fg: '#FF6B6B' },
  FOUNDERS:{ label: 'Founders & Culture', icon: '👤', bg: '#1a2020', fg: '#80deea' },
  PRODUCT: { label: 'Product Spotlight', icon: '☕', bg: '#1a2a1a', fg: '#9CBF9F' },
  COMMUNITY:{ label: 'Community', icon: '🤝', bg: '#2a2010', fg: '#FFE66D' },
};

window.HASH = {
  ORIGIN:   '#HomebrewHaven #PuertoRicoCoffee #Adjuntas #OriginToRitual',
  CRAFT:    '#HomebrewHaven #Roasting #CraftCoffee #ElPaso',
  FOUNDERS: '#HomebrewHaven #VeteranOwned #HispanicOwned #ElPaso',
  PRODUCT:  '#HomebrewHaven #SingleOrigin #CoffeeLovers',
  COMMUNITY:'#HomebrewHaven #ElPaso #CommunityCoffee',
};

window.CONTENT = [
  {
    id: 1, act: 1, type: 'ORIGIN', format: 'VIDEO', dur: '30–45s', plat: ['IG', 'FB', 'TT', 'YT'],
    title: 'From the Adjuntas Mountains to Your Cup',
    hook: '"This coffee traveled from a volcanic mountain in Puerto Rico to get here."',
    script: `Origin-story piece drawing from the "From Origin to Ritual" script — footage/photos from the Adjuntas farm (Domenico Celli / Forgotten Forest, Centro Tanama), farmers and pickers, then cut to the roast and final cup in El Paso.`,
    preprod: ['Pull footage/photos from the Puerto Rico farm shoot', 'Confirm usage rights with Domenico/Forgotten Forest'],
    prod: ['Edit from existing farm footage + new roastery b-roll'],
    postprod: ['CapCut, warm earthy color grade', 'Captions'],
    cta: 'Taste where it comes from — Homebrew Haven.',
  },
  {
    id: 2, act: 1, type: 'FOUNDERS', format: 'VIDEO', dur: '10–15 min', plat: ['YT', 'IG'],
    title: 'Founders Podcast — David & Tiffini on the Balcony',
    hook: 'A relaxed, honest conversation about how Homebrew Haven started.',
    script: `Podcast-style long-form video — David and Tiffini seated, ocean/beach ambiance in the background. Founder story, why they started a veteran/Hispanic-owned roastery, the Puerto Rico sourcing decision.`,
    preprod: ['Confirm location + audio setup for long-form recording'],
    prod: ['2-camera or 1-camera + lav mics', 'Long-form conversational format'],
    postprod: ['Full-length edit for YouTube + shorter cutdowns for IG'],
    cta: 'Watch the full story — link in bio.',
  },
  {
    id: 3, act: 2, type: 'CRAFT', format: 'VIDEO', dur: '20s', plat: ['IG', 'FB', 'TT'],
    title: 'Roast Day — What Actually Happens',
    hook: '"This is what turns a green bean into what\'s in your cup."',
    script: `Quick, satisfying roast-day process video — beans going in, roast sounds/smell described, beans coming out, cupping/tasting moment.`,
    preprod: ['Schedule around an actual roast day'],
    prod: ['Phone, macro shots of roaster + beans'],
    postprod: ['Trending audio, quick cuts'],
    cta: 'Fresh roasted, Puerto Rico origin — Homebrew Haven.',
  },
  {
    id: 4, act: 2, type: 'PRODUCT', format: 'VIDEO', dur: '15–20s', plat: ['IG', 'FB', 'TT'],
    title: 'How to Brew It At Home',
    hook: 'Quick brew tutorial for the single-origin bag.',
    script: `Simple pour-over or preferred brew method tutorial featuring the Homebrew Haven single-origin bag.`,
    preprod: ['Prep brew equipment + fresh beans'],
    prod: ['Overhead + close-up brew shots'],
    postprod: ['Step text overlays'],
    cta: 'Grab a bag and brew it yourself — link in bio.',
  },
];

window.EQUIPMENT = [
  { icon: '📱', title: 'Phone-First Production', sub: 'Roastery + Product', steps: [
    { t: 'Camera', d: 'iPhone 17 Pro Max for all product/roastery shots.' },
    { t: 'Stabilized shots', d: 'DJI Osmo Pocket 3 for smooth pours, roast-process b-roll, and handheld product moves.' },
    { t: 'Origin footage', d: 'Farm footage from Puerto Rico is existing archival material — pull from that library for origin pieces.' },
  ] },
  { icon: '🎙️', title: 'Long-Form Podcast Setup', sub: 'Founders Content', steps: [
    { t: 'Audio', d: 'Lav mics essential for long-form conversation quality.' },
    { t: 'Format', d: '10–15 min full episode + 3–5 short vertical cutdowns per episode.' },
  ] },
];
window.PREPROD = [
  { icon: '📋', title: 'Roast/Shoot Day Coordination', sub: 'With David & Tiffini', steps: [
    { t: 'Schedule', d: 'Confirm roast days and founder availability ahead of time.' },
  ] },
];
window.PRODUCTION = [
  { icon: '🎥', title: 'Roastery Shoot', sub: 'On-site', steps: [
    { t: 'Coverage', d: 'Process shots, product close-ups, founder moments.' },
  ] },
];
window.POSTPROD = [
  { icon: '✂️', title: 'Edit', sub: 'CapCut', steps: [
    { t: 'Tone', d: 'Warm, earthy, craft-forward. Captions on every piece.' },
  ] },
];

window.APPROVAL_STEPS = [
  { icon: '✂️', title: 'Editor → Drive', sub: 'VenPro Team', steps: [
    { t: 'Upload', d: 'Organized by activation/month.' },
  ] },
  { icon: '✅', title: 'Client Approval', sub: 'David & Tiffini', steps: [
    { t: 'Review window', d: '48 hours.' },
  ] },
];
window.METRICOOL_GUIDE = [
  { icon: '📊', title: 'Scheduling', sub: 'Metricool', steps: [
    { t: 'Platforms', d: 'IG, FB, TikTok, YouTube (long-form).' },
  ] },
];
