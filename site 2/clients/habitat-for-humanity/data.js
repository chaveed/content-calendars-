/* ═══════════════════════════════════════════════
   HABITAT FOR HUMANITY (El Paso) — data.js
   STARTER SET — long-standing VenPro client, but this file has
   no real content loaded yet beyond generic nonprofit sample
   posts. Send real content ideas / ad campaigns to replace.
   ═══════════════════════════════════════════════ */

window.CLIENT = {
  slug: 'habitatforhumanity',
  brandName: 'Habitat for Humanity',
  brandSub: 'El Paso — Monthly Content Calendar',
  monogram: 'HH',
  logoIcon: '🏠',
  accent: '#8BAE52',
  accent2: '#6f9440',
  accentlt: '#232d15',
  footerLine: 'Building Homes, Community, and Hope',
  activationFocus: { 1: 'Build & Volunteer Stories' },
  hoursPerActivation: 3,
  defaultEquipment: ['📱 iPhone 17 Pro Max', '🎥 DJI Osmo Pocket 3', '🎙️ Wireless Mic', '✂️ CapCut'],
  banner: '<b>Placeholder content — nothing real loaded yet.</b> This page is fully wired up (Firebase sync, editing, add-video) but the posts below are generic samples, not real Habitat for Humanity El Paso content. Send Edgar the real content ideas / ad campaigns to replace them.',
};

window.TYPES = {
  BUILD:     { label: 'Build Stories', icon: '🏗️', bg: '#1f2a12', fg: '#8BAE52' },
  VOLUNTEER: { label: 'Volunteer Spotlight', icon: '🙌', bg: '#1a2020', fg: '#80deea' },
  FAMILY:    { label: 'Homeowner Stories', icon: '🏡', bg: '#2a1a10', fg: '#FF6B6B' },
  COMMUNITY: { label: 'Community & Events', icon: '📣', bg: '#2a2010', fg: '#FFE66D' },
  RESTORE:   { label: 'ReStore', icon: '🛍️', bg: '#10202a', fg: '#80deea' },
};

window.HASH = {
  BUILD:     '#HabitatForHumanity #ElPaso #BuildingHomes',
  VOLUNTEER: '#HabitatForHumanity #Volunteer #ElPaso',
  FAMILY:    '#HabitatForHumanity #HomeownerStory #ElPaso',
  COMMUNITY: '#HabitatForHumanity #Community #ElPaso',
  RESTORE:   '#HabitatReStore #ElPaso #ShopReStore',
};

window.CONTENT = [
  {
    id: 1, act: 1, type: 'BUILD', format: 'VIDEO', dur: '20–30s', plat: ['IG', 'FB'],
    title: '[SAMPLE] A Build Day, Start to Finish',
    hook: '"From foundation to front door — here\'s what a build day looks like."',
    script: `[PLACEHOLDER SCRIPT] Fast-cut build-day montage — volunteers framing, hammering, painting. Text overlay marking build progress. Replace with a real build-day script once dates/details are confirmed.`,
    preprod: ['Confirm build site + date', 'Get volunteer/photo consent as needed'],
    prod: ['Camera, wide + close-up build shots'],
    postprod: ['Upbeat music, progress-marker text overlays'],
    cta: 'Volunteer for a build day — link in bio.',
  },
  {
    id: 2, act: 1, type: 'VOLUNTEER', format: 'VIDEO', dur: '20s', plat: ['IG', 'FB'],
    title: '[SAMPLE] Why I Volunteer',
    hook: 'A volunteer shares why they keep coming back.',
    script: `[PLACEHOLDER SCRIPT] Short interview with a volunteer — their reason for showing up, what keeps them coming back.`,
    preprod: ['Confirm volunteer + consent'],
    prod: ['Camera + mic, on-site'],
    postprod: ['Light captions'],
    cta: 'Join the next build — link in bio.',
  },
  {
    id: 3, act: 1, type: 'FAMILY', format: 'VIDEO', dur: '30s', plat: ['IG', 'FB', 'YT'],
    title: '[SAMPLE] A Family\'s Path to Homeownership',
    hook: 'A partner family shares their journey.',
    script: `[PLACEHOLDER SCRIPT] Homeowner partner family interview — their story, what the home means to them. Requires signed release before filming.`,
    preprod: ['Confirm family + signed release before filming'],
    prod: ['Camera + mic, home or build site'],
    postprod: ['Warm color grade, captions'],
    cta: 'Support a family\'s path home — donate or volunteer.',
  },
  {
    id: 4, act: 1, type: 'RESTORE', format: 'STILL', plat: ['IG', 'FB'],
    title: '[SAMPLE] ReStore Find of the Week',
    hook: 'Featured item/deal at the ReStore.',
    script: `[PLACEHOLDER CONCEPT] Clean product-style still of a featured ReStore item, price, and store hours/location.`,
    preprod: ['Confirm item + pricing with ReStore team'],
    prod: ['N/A — photo/graphic'],
    postprod: ['Design review before posting'],
    cta: 'Shop the ReStore — every purchase funds a build.',
  },
];

window.EQUIPMENT = [
  { icon: '📷', title: 'On-Site Build Coverage', sub: 'Camera + Mic', steps: [
    { t: 'Camera', d: 'iPhone 17 Pro Max — wide + detail shots of build progress.' },
    { t: 'Stabilized shots', d: 'DJI Osmo Pocket 3 for walking shots and smooth build-site b-roll.' },
    { t: 'Safety', d: 'Follow build-site safety rules — hard hat zones, clear of active work areas.' },
  ] },
];
window.PREPROD = [
  { icon: '📋', title: 'Build Day Coordination', sub: 'Before each shoot', steps: [
    { t: 'Schedule', d: 'Confirm build day/site with the Habitat coordinator ahead of time.' },
    { t: 'Consent', d: 'Signed releases for any homeowner partner family or named volunteer.' },
  ] },
];
window.PRODUCTION = [
  { icon: '🎥', title: 'Build Day Shoot', sub: 'On-site', steps: [
    { t: 'Coverage', d: 'Wide establishing shots, volunteer close-ups, progress markers throughout the day.' },
  ] },
];
window.POSTPROD = [
  { icon: '✂️', title: 'Edit', sub: 'CapCut', steps: [
    { t: 'Tone', d: 'Upbeat, community-forward. Captions on every piece.' },
  ] },
];

window.APPROVAL_STEPS = [
  { icon: '✂️', title: 'Editor → Drive', sub: 'VenPro Team', steps: [
    { t: 'Upload', d: 'Organized by build day/month.' },
  ] },
  { icon: '✅', title: 'Client Approval', sub: 'Habitat Marketing Contact', steps: [
    { t: 'Review window', d: '48 hours.' },
  ] },
];
window.METRICOOL_GUIDE = [
  { icon: '📊', title: 'Scheduling', sub: 'Metricool', steps: [
    { t: 'Platforms', d: 'IG, FB, GBP.' },
  ] },
];
