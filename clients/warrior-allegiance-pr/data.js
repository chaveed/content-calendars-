/* ═══════════════════════════════════════════════
   WARRIOR ALLEGIANCE — PUERTO RICO — data.js
   STARTER SET — you've previously built a 40-video bilingual
   (Spanish-forward) calendar for the PR shoot, split Day 1
   (30 videos) / Day 2 (10 videos), documentary/interview style
   featuring GM Carmen and owner David. Replace CONTENT below
   with that real calendar, or add posts live on the page.
   ═══════════════════════════════════════════════ */

window.CLIENT = {
  slug: 'warriorallegiancepr',
  brandName: 'Warrior Allegiance PR',
  brandSub: 'Contenido Mensual — Puerto Rico',
  monogram: 'WA',
  logoIcon: '🎖️',
  accent: '#D4AF37',
  accent2: '#b8952c',
  accentlt: '#3a3315',
  footerLine: 'Documentary-Style Content — Community &amp; Heritage',
  activationFocus: { 1: 'Day 1 — Employee & Community Stories (30 videos)', 2: 'Day 2 — Founder & Leadership (10 videos)' },
  hoursPerActivation: 4,
  defaultEquipment: ['📱 iPhone 17 Pro Max', '🎥 DJI Osmo Pocket 3', '🎙️ Lav Mic', '✂️ CapCut'],
  banner: '<b>Starter set.</b> Your real PR calendar is 40 videos across a 2-day shoot (Day 1: 30 employee/community pieces, Day 2: 10 founder/leadership pieces) — this page has a small sample loaded so it works end-to-end. Send the real scripts and they replace this.',
};

window.TYPES = {
  EDUCATION:   { label: 'Education', icon: '📚', bg: '#241f0a', fg: '#D4AF37' },
  ENTERTAINMENT: { label: 'Entertainment', icon: '🎉', bg: '#2a1a10', fg: '#FF6B6B' },
  AWARENESS:   { label: 'Awareness', icon: '🎖️', bg: '#1a2020', fg: '#80deea' },
  TESTIMONIAL: { label: 'Employee & Community Stories', icon: '🫡', bg: '#1a2a1a', fg: '#9CBF9F' },
  FOUNDER:     { label: 'Founder & Leadership', icon: '👤', bg: '#2a2010', fg: '#FFE66D' },
};

window.HASH = {
  EDUCATION:    '#WarriorAllegiancePR #PuertoRico #VeteranBenefits',
  ENTERTAINMENT:'#WarriorAllegiancePR #PuertoRico #Comunidad',
  AWARENESS:    '#WarriorAllegiancePR #VeteranAdvocacy #PuertoRico',
  TESTIMONIAL:  '#WarriorAllegiancePR #NuestraGente #PuertoRico',
  FOUNDER:      '#WarriorAllegiancePR #Liderazgo #PuertoRico',
};

window.CONTENT = [
  {
    id: 1, act: 1, type: 'TESTIMONIAL', format: 'VIDEO', dur: '30–40s', plat: ['IG', 'FB', 'TT'],
    title: 'GM Carmen — Por Qué Este Trabajo Importa',
    hook: '"Cada llamada que contesto es una persona real."',
    script: `Documentary/interview style. Carmen habla de su rol, por qué el trabajo con veteranos en Puerto Rico le importa, y cómo el equipo ayuda a la comunidad local. B-roll de oficina y equipo trabajando.`,
    preprod: ['Confirmar disponibilidad de Carmen', 'Preparar preguntas abiertas — no guion rígido'],
    prod: ['Cámara + lav mic', 'B-roll de oficina/equipo'],
    postprod: ['Edición documental, subtítulos bilingües', 'Color cálido'],
    cta: 'Conoce al equipo — Warrior Allegiance Puerto Rico.',
  },
  {
    id: 2, act: 1, type: 'TESTIMONIAL', format: 'VIDEO', dur: '25–35s', plat: ['IG', 'FB'],
    title: 'Empleado Spotlight — Historia de Servicio',
    hook: 'Un miembro del equipo comparte su propia conexión con la comunidad veterana.',
    script: `Entrevista estilo documental con un empleado — su historia, por qué trabaja aquí, qué significa ayudar a veteranos en su comunidad.`,
    preprod: ['Confirmar empleado + consentimiento firmado'],
    prod: ['Cámara + lav mic, ambiente natural de oficina'],
    postprod: ['Subtítulos bilingües, edición ligera'],
    cta: 'Su historia. Su comunidad. Warrior Allegiance PR.',
  },
  {
    id: 3, act: 1, type: 'AWARENESS', format: 'VIDEO', dur: '20s', plat: ['IG', 'FB', 'TT'],
    title: 'Beneficios Que Muchos Veteranos No Conocen',
    hook: '"Esto podría cambiar tu reclamo."',
    script: `Pieza informativa corta explicando un beneficio o proceso comúnmente malentendido, en español, tono cálido y directo.`,
    preprod: ['Confirmar dato/hecho con el equipo de cumplimiento'],
    prod: ['Cámara o avatar AI si aplica'],
    postprod: ['Subtítulos, revisión de cumplimiento'],
    cta: 'Conoce tus beneficios — Warrior Allegiance PR.',
  },
  {
    id: 4, act: 2, type: 'FOUNDER', format: 'VIDEO', dur: '40–60s', plat: ['IG', 'FB', 'YT'],
    title: 'David — Por Qué Puerto Rico',
    hook: '"Esto no fue casualidad. Puerto Rico fue la decisión correcta."',
    script: `Entrevista con el dueño David — visión de fundador, por qué expandir a Puerto Rico, la conexión con la comunidad veterana local y la herencia de la isla.`,
    preprod: ['Confirmar disponibilidad de David durante el rodaje', 'Preguntas abiertas: visión, por qué PR, qué sigue'],
    prod: ['Cámara + lav mic, locación con vista/ambiente de la isla si es posible'],
    postprod: ['Edición documental, subtítulos bilingües'],
    cta: 'La visión detrás de Warrior Allegiance Puerto Rico.',
  },
  {
    id: 5, act: 2, type: 'ENTERTAINMENT', format: 'VIDEO', dur: '15–20s', plat: ['IG', 'TT'],
    title: 'Un Día en la Oficina — Puerto Rico',
    hook: 'Vibra ligera, energía real del equipo en Puerto Rico.',
    script: `Clip ligero y auténtico del ambiente de oficina — energía del equipo, momentos genuinos, sin guion pesado.`,
    preprod: ['Identificar momentos naturales durante el rodaje'],
    prod: ['Cámara handheld, luz natural'],
    postprod: ['Corte rápido, audio de tendencia si aplica'],
    cta: 'Así se ve nuestro equipo en Puerto Rico.',
  },
];

window.EQUIPMENT = [
  { icon: '📷', title: 'Documentary Camera Setup', sub: 'Interview + B-roll', steps: [
    { t: 'Camera', d: 'iPhone 17 Pro Max + lav mic for interviews.' },
    { t: 'B-roll', d: 'DJI Osmo Pocket 3 for handheld, stabilized candid b-roll.' },
    { t: 'Style', d: 'Documentary/interview style throughout — no scripted stiff reads.' },
  ] },
];
window.PREPROD = [
  { icon: '📋', title: 'Pre-Shoot (PR Trip)', sub: '2-day production', steps: [
    { t: 'Day 1 focus', d: '30 pieces — employee and community stories.' },
    { t: 'Day 2 focus', d: '10 pieces — founder (David) and leadership (Carmen).' },
    { t: 'Consent', d: 'Signed releases for every employee/community testimonial before filming.' },
  ] },
];
window.PRODUCTION = [
  { icon: '🎥', title: 'On-Site Shoot', sub: 'Puerto Rico', steps: [
    { t: 'Interviews', d: 'Open-ended questions, documentary style, natural setting.' },
    { t: 'B-roll', d: 'Office, team, and location b-roll captured between interviews.' },
  ] },
];
window.POSTPROD = [
  { icon: '✂️', title: 'Bilingual Edit', sub: 'CapCut', steps: [
    { t: 'Subtitles', d: 'Bilingual (Spanish-forward) captions on every piece.' },
    { t: 'Tone', d: 'Warm color grade, documentary pacing — not corporate/stiff.' },
  ] },
];

window.APPROVAL_STEPS = [
  { icon: '✂️', title: 'Editor → Drive', sub: 'VenPro Team', steps: [
    { t: 'Upload', d: 'Organized by day (Day 1 / Day 2), bilingual captions included.' },
  ] },
  { icon: '✅', title: 'Client Approval', sub: 'David / Carmen', steps: [
    { t: 'Review window', d: '48 hours per batch.' },
  ] },
];
window.METRICOOL_GUIDE = [
  { icon: '📊', title: 'Scheduling', sub: 'Metricool', steps: [
    { t: 'Platforms', d: 'IG, FB, TikTok. Spread across 30 days.' },
  ] },
];
