/* ═══════════════════════════════════════════════
   SAINT MICHAEL'S LEARNING ACADEMY (SMLA) — data.js
   STARTER SET — long-standing VenPro client, but this file has
   no real content loaded yet beyond generic school sample posts.
   Send real content ideas / ad campaigns to replace.
   ═══════════════════════════════════════════════ */

window.CLIENT = {
  slug: 'smla',
  brandName: "Saint Michael's Learning Academy",
  brandSub: 'SMLA — Monthly Content Calendar',
  monogram: 'SM',
  logoIcon: '🎓',
  accent: '#6C8EBF',
  accent2: '#4f6f9e',
  accentlt: '#182230',
  footerLine: 'Academics, Character, and Community',
  activationFocus: { 1: 'Academics & Student Life' },
  hoursPerActivation: 3,
  defaultEquipment: ['📱 iPhone 17 Pro Max', '🎥 DJI Osmo Pocket 3', '🎙️ Wireless Mic', '✂️ CapCut'],
  banner: '<b>Placeholder content — nothing real loaded yet.</b> This page is fully wired up (Firebase sync, editing, add-video) but the posts below are generic samples, not real SMLA content. Send Edgar the real content ideas / ad campaigns to replace them.',
};

window.TYPES = {
  ACADEMICS: { label: 'Academics', icon: '📖', bg: '#182230', fg: '#6C8EBF' },
  STUDENT:   { label: 'Student Life', icon: '🎒', bg: '#1a2a1a', fg: '#9CBF9F' },
  COMMUNITY: { label: 'Community & Events', icon: '📣', bg: '#2a2010', fg: '#FFE66D' },
  ENROLL:    { label: 'Enrollment', icon: '✏️', bg: '#2a1a10', fg: '#FF6B6B' },
};

window.HASH = {
  ACADEMICS: '#SMLA #SaintMichaelsLearningAcademy #ElPasoSchools',
  STUDENT:   '#SMLA #StudentLife #ElPaso',
  COMMUNITY: '#SMLA #Community #ElPasoSchools',
  ENROLL:    '#SMLA #NowEnrolling #ElPasoSchools',
};

window.CONTENT = [
  {
    id: 1, act: 1, type: 'ACADEMICS', format: 'VIDEO', dur: '20s', plat: ['IG', 'FB'],
    title: '[SAMPLE] Inside the Classroom',
    hook: 'A quick look at a hands-on lesson in action.',
    script: `[PLACEHOLDER SCRIPT] Classroom b-roll of an engaging lesson, teacher voiceover or on-camera moment explaining the approach.`,
    preprod: ['Confirm classroom + teacher availability', 'Parent/guardian consent for any student on camera'],
    prod: ['Camera, classroom lighting'],
    postprod: ['Light captions, upbeat but calm tone'],
    cta: 'See what makes SMLA different — schedule a tour.',
  },
  {
    id: 2, act: 1, type: 'STUDENT', format: 'VIDEO', dur: '20s', plat: ['IG', 'FB', 'TT'],
    title: '[SAMPLE] A Day in the Life of an SMLA Student',
    hook: 'From morning drop-off to the final bell.',
    script: `[PLACEHOLDER SCRIPT] Day-in-the-life montage — arrival, class, recess/activity, dismissal. Requires consent for any identifiable student.`,
    preprod: ['Confirm student(s) + signed parent/guardian consent'],
    prod: ['Camera, handheld, natural light'],
    postprod: ['Upbeat music, quick cuts'],
    cta: 'Come see a day at SMLA — schedule a visit.',
  },
  {
    id: 3, act: 1, type: 'COMMUNITY', format: 'VIDEO', dur: '25s', plat: ['IG', 'FB'],
    title: '[SAMPLE] School Event Recap',
    hook: 'Highlights from a recent school event.',
    script: `[PLACEHOLDER SCRIPT] Recap montage of a school event — families, students, staff. Fill in with the real event once scheduled.`,
    preprod: ['Confirm event + photo/video consent policy'],
    prod: ['Camera, event coverage'],
    postprod: ['Highlight reel edit'],
    cta: 'Be part of the SMLA community.',
  },
  {
    id: 4, act: 1, type: 'ENROLL', format: 'STILL', plat: ['IG', 'FB'],
    title: '[SAMPLE] Now Enrolling Graphic',
    hook: 'Clean enrollment-CTA graphic with key dates.',
    script: `[PLACEHOLDER CONCEPT] Enrollment announcement graphic — grade levels, key dates, how to apply.`,
    preprod: ['Confirm enrollment dates/details with school admin'],
    prod: ['N/A — graphic design'],
    postprod: ['Review against brand guide before posting'],
    cta: 'Now enrolling — link in bio to apply.',
  },
];

window.EQUIPMENT = [
  { icon: '📷', title: 'On-Campus Coverage', sub: 'Camera + Mic', steps: [
    { t: 'Camera', d: 'iPhone 17 Pro Max — quiet, non-disruptive classroom-friendly setup.' },
    { t: 'Handheld / walk-throughs', d: 'DJI Osmo Pocket 3 for smooth hallway/campus walk-through shots.' },
    { t: 'Consent', d: 'Parent/guardian consent required for any identifiable student.' },
  ] },
];
window.PREPROD = [
  { icon: '📋', title: 'School Coordination', sub: 'Before each shoot', steps: [
    { t: 'Schedule', d: 'Confirm classroom/event access with school admin ahead of time.' },
    { t: 'Consent', d: 'Confirm which students have media consent on file before filming.' },
  ] },
];
window.PRODUCTION = [
  { icon: '🎥', title: 'Campus Shoot', sub: 'On-site', steps: [
    { t: 'Coverage', d: 'Classroom, hallway, and event b-roll — non-disruptive to instruction time.' },
  ] },
];
window.POSTPROD = [
  { icon: '✂️', title: 'Edit', sub: 'CapCut', steps: [
    { t: 'Tone', d: 'Warm, welcoming, community-forward. Captions on every piece.' },
  ] },
];

window.APPROVAL_STEPS = [
  { icon: '✂️', title: 'Editor → Drive', sub: 'VenPro Team', steps: [
    { t: 'Upload', d: 'Organized by month/event.' },
  ] },
  { icon: '✅', title: 'Client Approval', sub: 'SMLA Admin', steps: [
    { t: 'Review window', d: '48 hours.' },
  ] },
];
window.METRICOOL_GUIDE = [
  { icon: '📊', title: 'Scheduling', sub: 'Metricool', steps: [
    { t: 'Platforms', d: 'IG, FB, GBP.' },
  ] },
];
