// Traductions anglaises. Le français est écrit directement dans index.html.
const EN = {
  skip: "Skip to projects",
  nav_label: "Main navigation",
  nav_projects: "Projects",
  nav_path: "Background",
  nav_skills: "Skills",
  nav_contact: "Contact",
  theme_label: "Toggle theme",
  hero_lede: "Engineering student in cognitive science at ENSC, with a computer science degree (BUT Informatique) behind me. I build web applications end to end, from the database to the interface, starting from what their users actually need.",
  hero_cta1: "See BEAT-AI",
  hero_cta2: "Get in touch",
  portrait_alt: "Portrait of Alan Bourlard",
  portrait_annot: "hand-segmented",
  featured_kicker: "Main project, built during my internship at IHU Liryc in summer 2026",
  beat_lede: "A web serious game where the public traces the outline of the heart on real cardiac MRI scans. Each tracing is compared with a cardiologist's and an AI's, and feeds the research of the European ERC SMHEART project.",
  beat_live: "Play on beatai.eu",
  beat_shot_alt: "BEAT-AI home page: play as a guest or log in, with the Cardito mascot",
  beat_shot_cap: "Home page: animated ECG line, guest or account access, and Cardito, the mascot who walks players through the tutorial.",
  beat_role_h: "What I did",
  beat_role_p: "A first version existed in JavaScript and Node.js, but it had aged badly. As the only developer on the project for 10 weeks, I rebuilt it from the ground up:",
  beat_l1: "User-centred needs analysis: pre/post-session questionnaires and an observation grid.",
  beat_l2: "PostgreSQL data model (organs, images, players, sessions, tracings) with Alembic migrations.",
  beat_l3: "Asynchronous FastAPI backend in three layers (endpoints, services, repositories) with JWT authentication.",
  beat_l4: "React and TypeScript interface: drawing canvas with automatic contour closing, animated tutorial, French and English versions.",
  beat_l5: "Docker Compose, pytest unit tests and GitHub Actions continuous integration.",
  beat_score_h: "How the score works",
  beat_score_p: "The player's tracing becomes a binary mask, compared with the cardiologist's reference mask using the Dice coefficient, the standard measure in medical image segmentation:",
  beat_score_p2: "The final score weights this coefficient by drawing time. Running the same calculation on the AI lets players compare themselves with it.",
  fact_where: "Where",
  fact_when: "Duration",
  fact_when_v: "June – August 2026, 10 weeks",
  fact_stack: "Stack",
  fact_site: "Live site",
  beat_note: "The source code belongs to IHU Liryc and is not public.",
  alt_kicker: "A one-year apprenticeship, during my final year of the BUT",
  alt_lede: "A year as a full-stack developer at Communica, the company behind the Préventica trade show. Its platform, preventica.com, had been rebuilt by an external contractor and was over a year late: I joined at the critical point, five months before a launch that could not be pushed back.",
  alt_role_h: "What I did",
  alt_l1: "Filled the functional and technical gaps in the delivered site, then saw it through to production in January 2025.",
  alt_l2: "Rebuilt the role and permission system of the admin area, which let conflicting rights slip through when a user held several roles.",
  alt_l3: "Conference module end to end: back-office management, public schedule filtered by topic and day, automatic email notifications.",
  alt_l4: "New features and interface rework, from the business teams' request through to post-deployment follow-up.",
  alt_ctx_h: "The setting",
  alt_ctx_p: "A small web team, a flat hierarchy and frequent releases, with no continuous integration or automated tests: every deployment called for manual checks. I covered the whole cycle, from the brief to fixing the issues internal users reported.",
  alt_ctx_p2: "That is where I learned to work on an inherited codebase, under time pressure, on a tool the entire company depended on.",
  alt_when_v: "August 2024 – August 2025, one year",
  others_h: "Computer science degree projects",
  others_intro: "Built at the IUT de Bordeaux, alone or in teams. Each project comes with a write-up in PDF (in French).",
  guiblix_alt: "Guiblix home page with a carousel of TV shows",
  guiblix_p: "A website for rating and reviewing TV shows, built from scratch as a team using Scrum. I also coordinated the team's work.",
  retex: "Project write-up (PDF)",
  bio_alt: "A Biosphère game shown in the console, with the board and both players' scores",
  bio_p: "A board game whose rules we implemented week after week, then an AI to face the other pairs' AIs in a tournament.",
  tag_duo: "pair work",
  odomo_alt: "Odomo console output: heating and weather modes, rainfall histogram",
  odomo_p: "A home weather station to complete from existing code, with a design document explaining the algorithmic choices.",
  groupama_alt: "Website presenting the Groupama analysis",
  groupama_h: "Company analysis: Groupama",
  groupama_p: "A team macroeconomic analysis of the company, delivered as a report and then as a website designed to be easy to read.",
  tag_research: "desk research",
  retex_site: "Write-up: website (PDF)",
  retex_report: "Write-up: report (PDF)",
  poste_alt: "Zorin OS desktop in a virtual machine, with VS Code open on a Go program",
  poste_h: "Workstation setup",
  poste_p: "Installing and configuring a Linux development workstation in a virtual machine, from choosing the OS to the tooling, and documenting the process.",
  retex_all: "Download all project write-ups (PDF)",
  path_h: "Background",
  tl_liryc_h: "Full-stack developer intern, IHU Liryc",
  tl_liryc_p: "Rebuilt BEAT-AI for the ERC SMHEART project, supervised by Aurélien Bustin.",
  tl_ensc_when: "Since 2025",
  tl_ensc_h: "Engineering degree, ENSC – Bordeaux INP",
  tl_ensc_p: "French graduate school of cognitive engineering: computer science, cognitive science and human-centred design.",
  tl_alt_h: "Full-stack developer apprenticeship, Communica",
  tl_alt_p: "A year on preventica.com, the Préventica trade show website: launch, fixes and new features in Symfony.",
  tl_but_h: "BUT Informatique, IUT de Bordeaux",
  tl_but_p: "International class, cybersecurity track.",
  skills_h: "Skills",
  sk_lang: "Languages",
  sk_web: "Web",
  sk_data: "Data",
  sk_ops: "Tooling and deployment",
  sk_method: "Methods",
  sk_method_v: "User-centred design, Scrum, Jira, technical writing",
  sk_spoken: "Spoken languages",
  sk_spoken_v: "French (native), English",
  aside: "Away from code: seven years of basketball, the gym, video games with friends, manga and TV series.",
  contact_h: "An internship, a project, a question?",
};

const FR = {};
const textNodes = document.querySelectorAll("[data-i18n]");
const attrNodes = document.querySelectorAll("[data-i18n-attr]");

textNodes.forEach((el) => { FR[el.dataset.i18n] = el.textContent; });
attrNodes.forEach((el) => {
  el.dataset.i18nAttr.split(";").forEach((pair) => {
    const [attr, key] = pair.split(":");
    FR[key] = el.getAttribute(attr);
  });
});

const langBtn = document.getElementById("lang-toggle");

function setLang(lang) {
  const dict = lang === "en" ? EN : FR;
  textNodes.forEach((el) => {
    const v = dict[el.dataset.i18n];
    if (v != null) el.textContent = v;
  });
  attrNodes.forEach((el) => {
    el.dataset.i18nAttr.split(";").forEach((pair) => {
      const [attr, key] = pair.split(":");
      if (dict[key] != null) el.setAttribute(attr, dict[key]);
    });
  });
  document.documentElement.lang = lang;
  document.title = lang === "en" ? "Alan Bourlard — Portfolio" : "Alan Bourlard — Portfolio";
  langBtn.textContent = lang === "en" ? "FR" : "EN";
  langBtn.setAttribute("aria-label", lang === "en" ? "Passer en français" : "Switch to English");
  try { localStorage.setItem("lang", lang); } catch (e) {}
}

langBtn.addEventListener("click", () => {
  setLang(document.documentElement.lang === "en" ? "fr" : "en");
});

let startLang = "fr";
try {
  const saved = localStorage.getItem("lang");
  if (saved) startLang = saved;
  else if (!navigator.language.toLowerCase().startsWith("fr")) startLang = "en";
} catch (e) {}
if (startLang === "en") setLang("en");

// Thème clair / sombre
document.getElementById("theme-toggle").addEventListener("click", () => {
  const root = document.documentElement;
  const current = root.dataset.theme ||
    (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  const next = current === "dark" ? "light" : "dark";
  root.dataset.theme = next;
  try { localStorage.setItem("theme", next); } catch (e) {}
});
