/* ═══════════════════════════════════════════════
   WARRIOR ALLEGIANCE (El Paso) — data.js
   STARTER SET — replace CONTENT below with the real monthly
   calendar (you've previously run a 168-video/month calendar
   for this client — this file currently holds a small sample
   so the page works end-to-end. Send new posts/ad campaigns
   and they drop straight into the CONTENT array below, or add
   them live on the page itself once Firebase is connected.)
   ═══════════════════════════════════════════════ */

window.CLIENT = {
  slug: 'warriorallegiance',
  brandName: 'Warrior Allegiance',
  brandSub: 'Monthly Content Calendar — El Paso',
  monogram: 'WA',
  logoIcon: '🎖️',
  accent: '#D4AF37',
  accent2: '#b8952c',
  accentlt: '#3a3315',
  footerLine: 'Veteran Advocacy &amp; Benefits Education',
  activationFocus: { 1: 'Benefits Education + Awareness', 2: 'Testimonials + Community' },
  hoursPerActivation: 3,
  defaultEquipment: ['📱 iPhone 17 Pro Max', '🎥 DJI Osmo Pocket 3', '🎙️ ElevenLabs VO', '🧑‍💻 Higgsfield / Seedance 2.0', '✂️ CapCut'],
  banner: '<b>Starter set.</b> This page is wired up and fully live-editable, but only has a handful of sample posts loaded. Send Edgar the real monthly content ideas / ad campaigns and they\'ll replace this — or add them straight into the page with the ✎ edit or ＋ Add Video buttons.',
};

window.TYPES = {
  EDUCATION:  { label: 'Benefits Education', icon: '📚', bg: '#241f0a', fg: '#D4AF37' },
  AWARENESS:  { label: 'Advocacy & Awareness', icon: '🎖️', bg: '#1a2020', fg: '#80deea' },
  TESTIMONIAL:{ label: 'Veteran Testimonials', icon: '🫡', bg: '#1a2a1a', fg: '#9CBF9F' },
  CULTURE:    { label: 'Team & Culture', icon: '🤝', bg: '#2a1a10', fg: '#FF6B6B' },
  PODCAST:    { label: 'Podcast Clips', icon: '🎙', bg: '#10202a', fg: '#80deea' },
};

window.HASH = {
  EDUCATION:   '#VeteranBenefits #VABenefits #WarriorAllegiance #KnowYourBenefits #VeteranSupport',
  AWARENESS:   '#VeteranAdvocacy #SupportVeterans #WarriorAllegiance #MilitaryCommunity #VeteranOwned',
  TESTIMONIAL: '#VeteranStory #RealTalk #WarriorAllegiance #ThankAVet #VeteranTestimonial',
  CULTURE:     '#TeamWarriorAllegiance #VeteranOwnedBusiness #Culture #ElPaso',
  PODCAST:     '#WarriorAllegiancePodcast #VeteranPodcast #MilitaryLife',
};

window.CONTENT = [
  {
    id: 1, act: 1, type: 'EDUCATION', format: 'VIDEO', dur: '30–45s', plat: ['IG', 'FB', 'TT', 'YT'],
    title: 'Mr. Lee Explains: What Is a VA Claim, Really?',
    hook: '"Most veterans don\'t know this one thing about their claim."',
    script: `[AI AVATAR — Mr. Lee, direct to camera]\n\nHOOK (0–5s): "If you've never filed a VA claim before, here's the one thing nobody tells you."\n\nBODY (5–30s): Mr. Lee breaks down, in plain language, what a VA disability claim actually is, what evidence it needs, and the #1 mistake first-time filers make.\n\nCTA (30–45s): "Warrior Allegiance walks you through it — link in bio."`,
    preprod: ['Confirm this week\'s education topic with the compliance lead', 'Write Mr. Lee script — plain language, no legal overreach', 'Pull any supporting on-screen text/graphics'],
    prod: ['Generate Mr. Lee avatar video in Higgsfield / Seedance 2.0', 'ElevenLabs VO pass on the script', 'Export 9:16'],
    postprod: ['CapCut: captions, brand end card', 'Compliance pass — no guaranteed-outcome language', 'Export + upload to Frame.io'],
    cta: 'Learn your benefits — link in bio.',
  },
  {
    id: 2, act: 1, type: 'AWARENESS', format: 'VIDEO', dur: '20–30s', plat: ['IG', 'FB', 'TT'],
    title: 'The Number Most Veterans Get Wrong',
    hook: '"This percentage could be costing you thousands."',
    script: `Quick-hit awareness piece on a commonly misunderstood benefits topic. Mr. Lee avatar or real host, direct address, single clear stat as the hook, CTA to learn more via Warrior Allegiance.`,
    preprod: ['Confirm the stat/fact with the compliance lead before scripting', 'Keep claims accurate and sourced'],
    prod: ['AI avatar generation or real on-camera host', 'ElevenLabs VO if avatar'],
    postprod: ['Captions, brand end card', 'Compliance pass', 'Export 9:16'],
    cta: 'Know your number — Warrior Allegiance can help.',
  },
  {
    id: 3, act: 1, type: 'CULTURE', format: 'VIDEO', dur: '20s', plat: ['IG', 'FB'],
    title: 'Meet the Team — Welcome Center',
    hook: '"The people who pick up the phone when you call."',
    script: `Real, on-camera intro from a Welcome Center team member — who they are, what they help with, why they do this work.`,
    preprod: ['Confirm team member + schedule', 'Keep it short and warm, not scripted stiff'],
    prod: ['Phone or camera, natural light', 'Wireless mic'],
    postprod: ['Light captions, warm color grade'],
    cta: 'Reach out — the team is here to help.',
  },
  {
    id: 4, act: 2, type: 'TESTIMONIAL', format: 'VIDEO', dur: '30–40s', plat: ['IG', 'FB', 'YT'],
    title: 'Veteran Testimonial — "I Didn\'t Think I Qualified"',
    hook: '"I almost didn\'t apply. I\'m glad I did."',
    script: `Real veteran testimonial (with signed release) — their story, what almost stopped them, what Warrior Allegiance helped with, outcome (kept general, no guaranteed-result claims).`,
    preprod: ['Confirm release/consent is signed BEFORE filming', 'Prep a few open-ended interview questions — no script'],
    prod: ['Camera + lav mic', 'Documentary-style, natural setting'],
    postprod: ['Light edit, keep it authentic — minimal polish', 'Captions'],
    cta: 'Your story could be next. Reach out today.',
  },
  {
    id: 5, act: 2, type: 'PODCAST', format: 'VIDEO', dur: '60s clip', plat: ['IG', 'TT', 'YT'],
    title: 'Podcast Clip — This Week\'s Episode Highlight',
    hook: 'Pull the strongest 60-second moment from this week\'s podcast episode.',
    script: `Clip from the Warrior Allegiance podcast (Spotify / Apple / Amazon Music). Pick the most quotable or useful moment. Add captions + episode CTA.`,
    preprod: ['Review full episode, timestamp best clip candidates'],
    prod: ['Export clip from podcast recording'],
    postprod: ['Vertical crop, captions, episode link CTA card'],
    cta: 'Full episode on Spotify, Apple, and Amazon Music.',
  },
  {
    id: 6, act: 2, type: 'AWARENESS', format: 'STILL', plat: ['IG', 'FB'],
    title: 'FRAUD Act (HR 5723) — What Veterans Should Know',
    hook: 'Compliance-aware static post explaining what the FRAUD Act means for veterans, in plain terms.',
    script: `CONCEPT: Clean informational graphic — headline stat/fact, brief plain-language explainer, source-backed. No claim promises. Legal-reviewed copy before posting.`,
    preprod: ['Legal/compliance review of copy before design', 'Confirm sourcing'],
    prod: ['N/A — graphic design'],
    postprod: ['Design review against brand guide', 'Client approval before scheduling'],
    cta: 'Know your rights. Warrior Allegiance is here to help.',
  },
];

window.EQUIPMENT = [
  { icon: '🧑‍💻', title: 'AI Avatar Pipeline', sub: 'Higgsfield / Seedance 2.0', steps: [
    { t: 'When to use', d: 'Education, awareness, and explainer content where a consistent host (Mr. Lee) delivers information clearly and repeatably.' },
    { t: 'Voice', d: 'ElevenLabs for VO — match tone to topic (calm/informative for education, warmer for testimonials).' },
    { t: 'Compliance', d: 'Every education/awareness script gets a compliance pass before generation — no guaranteed-outcome language.' },
  ] },
  { icon: '📷', title: 'Real Camera Shoots', sub: 'Testimonials, Team, Culture', steps: [
    { t: 'Camera', d: 'iPhone 17 Pro Max for all real-camera shoots — testimonials, team intros, culture content. AI avatars are for education/explainer only.' },
    { t: 'Stabilized shots', d: 'DJI Osmo Pocket 3 for handheld walk-and-talks, b-roll, and any shot that needs smooth motion without a full gimbal rig.' },
    { t: 'Consent', d: 'Signed release required before filming any veteran testimonial.' },
    { t: 'Style', d: 'Documentary/interview style — natural setting, minimal staging.' },
  ] },
];
window.PREPROD = [
  { icon: '📋', title: 'Weekly Content Lock', sub: 'Monday', steps: [
    { t: 'Topic selection', d: 'Producer + compliance lead pick the week\'s education/awareness topics.' },
    { t: 'Script + compliance review', d: 'All education/awareness scripts reviewed for accuracy before production — no guaranteed-outcome claims.' },
  ] },
];
window.PRODUCTION = [
  { icon: '🎬', title: 'AI Avatar Generation', sub: 'Mr. Lee content', steps: [
    { t: 'Generate', d: 'Higgsfield / Seedance 2.0 avatar generation from the locked script.' },
    { t: 'Voice pass', d: 'ElevenLabs VO synced to avatar.' },
  ] },
  { icon: '🎥', title: 'Real Shoots', sub: 'Testimonials / Team / Podcast', steps: [
    { t: 'Camera', d: 'iPhone 17 Pro Max + lav mic for interviews. DJI Osmo Pocket 3 for handheld b-roll and walk-and-talks.' },
    { t: 'Podcast', d: 'Recorded separately — clips pulled in post.' },
  ] },
];
window.POSTPROD = [
  { icon: '✂️', title: 'Edit + Compliance', sub: 'CapCut', steps: [
    { t: 'Edit', d: 'CapCut — captions, brand end card, export 9:16.' },
    { t: 'Compliance pass', d: 'Final review before Frame.io upload — required for all education/awareness content.' },
  ] },
];

window.APPROVAL_STEPS = [
  { icon: '✂️', title: 'Step 1: Editor Completes Content', sub: 'VenPro Team', steps: [
    { t: 'Compliance review', d: 'Education/awareness content gets a compliance pass before it leaves the editor.' },
    { t: 'Upload', d: 'Google Drive, organized by activation.' },
  ] },
  { icon: '📤', title: 'Step 2: Submit to Audrey', sub: 'Scheduler', steps: [
    { t: 'Notify', d: 'Content ready for review, with Drive link and notes.' },
  ] },
  { icon: '✅', title: 'Step 3: Client Approval', sub: 'Final Review', steps: [
    { t: 'Review window', d: '48 hours. No response = approved on schedule.' },
  ] },
];
window.METRICOOL_GUIDE = [
  { icon: '📊', title: 'Scheduling', sub: 'Metricool', steps: [
    { t: 'Platforms', d: 'IG, FB, TikTok, YouTube. Audrey manages scheduling.' },
  ] },
];
