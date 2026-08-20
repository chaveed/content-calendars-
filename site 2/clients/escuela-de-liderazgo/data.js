/* ═══════════════════════════════════════════════
   ESCUELA DE LIDERAZGO (Aguadilla, PR) — data.js
   STARTER SET — you've built a real bilingual 40-video calendar
   organized by the 4 pillars below for a single production day.
   Replace CONTENT with that real calendar, or add posts live.
   ═══════════════════════════════════════════════ */

window.CLIENT = {
  slug: 'escueladeliderazgo',
  brandName: 'Escuela de Liderazgo',
  brandSub: 'School of Leadership — Aguadilla, PR',
  monogram: 'EL',
  logoIcon: '🎓',
  accent: '#C9A227',
  accent2: '#a5851f',
  accentlt: '#3a3010',
  footerLine: 'Leadership Certification &amp; Ministry',
  activationFocus: { 1: 'Single Production Day — All 4 Pillars' },
  hoursPerActivation: 6,
  defaultEquipment: ['📱 iPhone 17 Pro Max', '🎥 DJI Osmo Pocket 3', '🎙️ Lav Mic', '✂️ CapCut'],
  banner: '<b>Starter set.</b> Your real calendar is a bilingual 40-video single-day shoot across the 4 pillars below (founded by Pastor David). Replace CONTENT with the real scripts, or add posts live on the page.',
};

window.TYPES = {
  PROBLEM:   { label: "Leader's Core Problem", icon: '🧩', bg: '#241f0a', fg: '#C9A227' },
  AUTHORITY: { label: "Guide's Authority", icon: '🎓', bg: '#1a2020', fg: '#80deea' },
  SUCCESS:   { label: 'Success Stories', icon: '🌟', bg: '#1a2a1a', fg: '#9CBF9F' },
  PLAN:      { label: 'Actionable / Accessible Plan', icon: '📋', bg: '#2a1a10', fg: '#FF6B6B' },
};

window.HASH = {
  PROBLEM:   '#EscuelaDeLiderazgo #Liderazgo #PuertoRico',
  AUTHORITY: '#EscuelaDeLiderazgo #PastorDavid #Liderazgo',
  SUCCESS:   '#EscuelaDeLiderazgo #Testimonios #Liderazgo',
  PLAN:      '#EscuelaDeLiderazgo #PlanDeAccion #Liderazgo',
};

window.CONTENT = [
  {
    id: 1, act: 1, type: 'PROBLEM', format: 'VIDEO', dur: '20–30s', plat: ['IG', 'FB', 'TT'],
    title: 'El Problema Que Nadie Te Dice de Liderar',
    hook: '"Nadie te preparó para esto — y por eso muchos líderes fallan aquí."',
    script: `Pastor David habla directo a cámara sobre un problema común y real que enfrentan líderes emergentes — algo relatable, sin sonar a sermón. Termina abriendo la pregunta que la escuela responde.`,
    preprod: ['Confirmar el "core problem" del día con Pastor David', 'Preparar preguntas guía, no guion rígido'],
    prod: ['Cámara + lav mic, fondo limpio'],
    postprod: ['Subtítulos bilingües', 'Corte directo, sin relleno'],
    cta: 'Este es el problema que resolvemos en Escuela de Liderazgo.',
  },
  {
    id: 2, act: 1, type: 'AUTHORITY', format: 'VIDEO', dur: '25–35s', plat: ['IG', 'FB'],
    title: 'Pastor David — 40 Años de Experiencia',
    hook: '"40 años entre el liderazgo corporativo y pastoral me enseñaron esto."',
    script: `Pastor David comparte una lección específica de sus 40 años de experiencia combinada (corporativa + pastoral) que establece por qué es la autoridad correcta para enseñar esto.`,
    preprod: ['Identificar una historia/lección específica y concreta'],
    prod: ['Cámara + lav mic'],
    postprod: ['Subtítulos, tono cálido pero autorizado'],
    cta: 'Aprende de alguien que lo ha vivido — Escuela de Liderazgo.',
  },
  {
    id: 3, act: 1, type: 'SUCCESS', format: 'VIDEO', dur: '25–35s', plat: ['IG', 'FB', 'TT'],
    title: 'Historia de Éxito — Graduado Comparte Su Transformación',
    hook: 'Un graduado de la escuela comparte cómo cambió su forma de liderar.',
    script: `Testimonio real de un graduado — antes/después, qué aprendió, cómo lo aplica hoy. Estilo documental, preguntas abiertas.`,
    preprod: ['Confirmar graduado disponible + consentimiento'],
    prod: ['Cámara + lav mic, ambiente natural'],
    postprod: ['Subtítulos, edición ligera y auténtica'],
    cta: 'Tu transformación puede ser la próxima.',
  },
  {
    id: 4, act: 1, type: 'PLAN', format: 'VIDEO', dur: '20–30s', plat: ['IG', 'FB', 'TT'],
    title: '3 Pasos Para Empezar a Liderar Diferente Hoy',
    hook: '"No necesitas un título para empezar — necesitas estos 3 pasos."',
    script: `Pastor David da un plan corto, accionable y concreto — 3 pasos simples que cualquiera puede empezar a aplicar hoy, sin necesitar inscribirse todavía. Construye confianza antes del CTA.`,
    preprod: ['Definir los 3 pasos con anticipación — deben ser genuinamente accionables'],
    prod: ['Cámara + lav mic, gráficos de apoyo en post'],
    postprod: ['Overlay de texto con los 3 pasos', 'Subtítulos bilingües'],
    cta: 'Inscríbete en Escuela de Liderazgo — link en bio.',
  },
];

window.EQUIPMENT = [
  { icon: '📷', title: 'Interview Setup', sub: 'Single-Day Shoot', steps: [
    { t: 'Camera', d: 'iPhone 17 Pro Max + lav mic, clean consistent background across the day.' },
    { t: 'B-roll / cutaways', d: 'DJI Osmo Pocket 3 for smooth handheld cutaways between interview setups.' },
    { t: 'Efficiency', d: 'One production day covers all 4 pillars — batch by pillar to keep energy/tone consistent within each block.' },
  ] },
];
window.PREPROD = [
  { icon: '📋', title: 'Pre-Shoot Planning', sub: 'Before the single production day', steps: [
    { t: 'Pillar mapping', d: 'Confirm how many pieces per pillar (Problem / Authority / Success / Plan) before the day starts.' },
    { t: 'Graduate testimonials', d: 'Line up graduates + signed consent ahead of time for Success Story pieces.' },
  ] },
];
window.PRODUCTION = [
  { icon: '🎥', title: 'Shoot Day', sub: 'Batched by Pillar', steps: [
    { t: 'Order', d: 'Shoot Authority + Problem pieces with Pastor David first (highest energy), then Success testimonials, then Plan/CTA pieces.' },
  ] },
];
window.POSTPROD = [
  { icon: '✂️', title: 'Bilingual Edit', sub: 'CapCut', steps: [
    { t: 'Subtitles', d: 'Bilingual (Spanish/English) captions on every piece.' },
  ] },
];

window.APPROVAL_STEPS = [
  { icon: '✂️', title: 'Editor → Drive', sub: 'VenPro Team', steps: [
    { t: 'Upload', d: 'Organized by pillar, bilingual captions included.' },
  ] },
  { icon: '✅', title: 'Client Approval', sub: 'Pastor David', steps: [
    { t: 'Review window', d: '48 hours per batch.' },
  ] },
];
window.METRICOOL_GUIDE = [
  { icon: '📊', title: 'Scheduling', sub: 'Metricool', steps: [
    { t: 'Platforms', d: 'IG, FB, TikTok. Rotate pillars — no two same-pillar posts back to back.' },
  ] },
];
