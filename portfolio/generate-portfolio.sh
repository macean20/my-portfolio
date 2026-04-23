#!/bin/bash

# ============================================================
#  PORTFOLIO DEVOPS - GÉNÉRATEUR AUTOMATIQUE
#  Script pour créer un portfolio professionnel complet
#  Auteur : Votre Nom | DevOps Engineer
# ============================================================

set -e

# ── Couleurs terminal ──────────────────────────────────────
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
BOLD='\033[1m'
RESET='\033[0m'

# ── Configuration personnalisable ──────────────────────────
NAME="Votre Nom"
TITLE="DevOps Engineer"
EMAIL="votre.email@gmail.com"
PHONE="+221 XX XXX XX XX"
LOCATION="Dakar, Sénégal"
LINKEDIN="https://linkedin.com/in/votre-profil"
GITHUB="https://github.com/votre-github"
INSTAGRAM="https://instagram.com/votre-instagram"
CV_FILENAME="mon-cv.pdf"
PORTFOLIO_DIR="portfolio"

log()     { echo -e "${GREEN}✔ $1${RESET}"; }
info()    { echo -e "${CYAN}→ $1${RESET}"; }
warn()    { echo -e "${YELLOW}⚠ $1${RESET}"; }
section() { echo -e "\n${BOLD}${CYAN}══════════════════════════════════════${RESET}"; echo -e "${BOLD}${CYAN}  $1${RESET}"; echo -e "${BOLD}${CYAN}══════════════════════════════════════${RESET}\n"; }

section "🚀 GÉNÉRATION DU PORTFOLIO DEVOPS"
info "Création de l'architecture des dossiers..."

# ── Création de l'arborescence ─────────────────────────────
mkdir -p "$PORTFOLIO_DIR"/{assets/{css,js,img,fonts},cv,projects/{ci-cd-pipeline,monitoring-stack,infrastructure-k8s,linux-automation,docker-compose-lab,network-security},.github/workflows,components}

log "Arborescence créée"

# ══════════════════════════════════════════════════════════════
# FICHIER : assets/css/style.css
# ══════════════════════════════════════════════════════════════
info "Génération du CSS principal..."
cat > "$PORTFOLIO_DIR/assets/css/style.css" << 'ENDCSS'
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:wght@300;400;500&family=Inter:wght@300;400;500&display=swap');

/* ── Variables ─────────────────────────────────────────── */
:root {
  --bg:         #0a0c10;
  --bg-card:    #111318;
  --bg-glass:   rgba(17,19,24,0.85);
  --border:     rgba(255,255,255,0.07);
  --accent:     #00e5ff;
  --accent2:    #7b61ff;
  --accent3:    #ff6b35;
  --text:       #e8eaf0;
  --muted:      #6b7280;
  --success:    #22c55e;
  --font-head:  'Syne', sans-serif;
  --font-mono:  'DM Mono', monospace;
  --font-body:  'Inter', sans-serif;
  --radius:     12px;
  --radius-lg:  20px;
  --shadow:     0 8px 32px rgba(0,229,255,0.08);
  --transition: 0.3s cubic-bezier(0.4,0,0.2,1);
}

/* ── Reset ─────────────────────────────────────────────── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; font-size: 16px; }
body {
  font-family: var(--font-body);
  background: var(--bg);
  color: var(--text);
  line-height: 1.6;
  overflow-x: hidden;
}
img { max-width: 100%; display: block; }
a  { color: inherit; text-decoration: none; }
ul { list-style: none; }

/* ── Scrollbar ─────────────────────────────────────────── */
::-webkit-scrollbar { width: 5px; }
::-webkit-scrollbar-track { background: var(--bg); }
::-webkit-scrollbar-thumb { background: var(--accent); border-radius: 99px; }

/* ── Noise texture overlay ─────────────────────────────── */
body::before {
  content: '';
  position: fixed; inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
  pointer-events: none; z-index: 0; opacity: 0.4;
}

/* ── Glow orbs background ──────────────────────────────── */
.bg-orbs { position: fixed; inset: 0; pointer-events: none; z-index: 0; overflow: hidden; }
.orb {
  position: absolute; border-radius: 50%;
  filter: blur(120px); opacity: 0.12;
  animation: drift 20s infinite ease-in-out alternate;
}
.orb-1 { width: 600px; height: 600px; background: var(--accent2); top: -200px; left: -200px; animation-delay: 0s; }
.orb-2 { width: 400px; height: 400px; background: var(--accent);  bottom: -100px; right: -100px; animation-delay: -7s; }
.orb-3 { width: 300px; height: 300px; background: var(--accent3); top: 50%; left: 50%; animation-delay: -14s; }
@keyframes drift { from { transform: translate(0,0) scale(1); } to { transform: translate(40px,30px) scale(1.1); } }

/* ── Navbar ────────────────────────────────────────────── */
#navbar {
  position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
  padding: 0 2rem;
  background: rgba(10,12,16,0.8);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border);
  transition: var(--transition);
}
.nav-inner {
  max-width: 1200px; margin: 0 auto;
  display: flex; align-items: center; justify-content: space-between;
  height: 68px;
}
.nav-logo {
  font-family: var(--font-head); font-size: 1.3rem; font-weight: 800;
  background: linear-gradient(135deg, var(--accent), var(--accent2));
  -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.02em;
}
.nav-logo span { font-family: var(--font-mono); font-size: 0.9rem; opacity: 0.6; }
.nav-links { display: flex; gap: 0.25rem; align-items: center; }
.nav-links a {
  font-family: var(--font-mono); font-size: 0.82rem; font-weight: 500;
  color: var(--muted); padding: 0.4rem 0.9rem; border-radius: 8px;
  transition: var(--transition); letter-spacing: 0.03em;
}
.nav-links a:hover, .nav-links a.active {
  color: var(--accent); background: rgba(0,229,255,0.08);
}
.nav-cta {
  background: linear-gradient(135deg, var(--accent), var(--accent2)) !important;
  -webkit-background-clip: text !important; -webkit-text-fill-color: transparent !important;
  background-clip: text !important;
  border: 1px solid rgba(0,229,255,0.3) !important;
}
.nav-cta:hover { background: rgba(0,229,255,0.12) !important; }
.hamburger { display: none; flex-direction: column; gap: 5px; cursor: pointer; padding: 5px; }
.hamburger span { width: 24px; height: 2px; background: var(--text); border-radius: 2px; transition: var(--transition); }

/* ── Layout ────────────────────────────────────────────── */
.page { position: relative; z-index: 1; }
.section { padding: 7rem 2rem; max-width: 1200px; margin: 0 auto; }
.section-tag {
  font-family: var(--font-mono); font-size: 0.78rem;
  color: var(--accent); letter-spacing: 0.15em; text-transform: uppercase;
  margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.5rem;
}
.section-tag::before { content: '//'; opacity: 0.5; }
.section-title {
  font-family: var(--font-head); font-size: clamp(2rem, 5vw, 3.2rem);
  font-weight: 800; line-height: 1.1; letter-spacing: -0.03em;
  margin-bottom: 1.5rem;
}
.gradient-text {
  background: linear-gradient(135deg, var(--accent), var(--accent2));
  -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* ── Hero ──────────────────────────────────────────────── */
#home {
  min-height: 100vh; display: flex; align-items: center;
  padding-top: 68px;
}
.hero-inner {
  max-width: 1200px; margin: 0 auto; width: 100%;
  padding: 4rem 2rem;
  display: grid; grid-template-columns: 1fr 420px; gap: 4rem; align-items: center;
}
.hero-eyebrow {
  font-family: var(--font-mono); font-size: 0.85rem;
  color: var(--accent); letter-spacing: 0.1em;
  margin-bottom: 1.2rem; display: flex; align-items: center; gap: 0.6rem;
}
.hero-eyebrow::before {
  content: ''; width: 24px; height: 1px; background: var(--accent);
}
.hero-name {
  font-family: var(--font-head); font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 800; line-height: 1.0; letter-spacing: -0.04em;
  margin-bottom: 0.5rem;
}
.hero-role {
  font-family: var(--font-head); font-size: clamp(1.2rem, 3vw, 1.8rem);
  font-weight: 600; color: var(--muted); margin-bottom: 1.5rem;
  letter-spacing: -0.02em;
}
.hero-role .highlight { color: var(--accent3); }
.hero-desc {
  font-size: 1rem; color: var(--muted); line-height: 1.7;
  max-width: 500px; margin-bottom: 2.5rem;
}
.hero-btns { display: flex; gap: 1rem; flex-wrap: wrap; }
.btn {
  display: inline-flex; align-items: center; gap: 0.5rem;
  padding: 0.75rem 1.75rem; border-radius: 10px;
  font-family: var(--font-mono); font-size: 0.85rem; font-weight: 500;
  letter-spacing: 0.03em; cursor: pointer; transition: var(--transition);
  border: none;
}
.btn-primary {
  background: linear-gradient(135deg, var(--accent), var(--accent2));
  color: #000; font-weight: 700;
}
.btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,229,255,0.3); }
.btn-outline {
  background: transparent; color: var(--text);
  border: 1px solid var(--border);
}
.btn-outline:hover { border-color: var(--accent); color: var(--accent); transform: translateY(-2px); }

/* ── Hero Status Badge ─────────────────────────────────── */
.hero-status {
  display: inline-flex; align-items: center; gap: 0.6rem;
  font-family: var(--font-mono); font-size: 0.78rem;
  color: var(--success); background: rgba(34,197,94,0.1);
  border: 1px solid rgba(34,197,94,0.2); border-radius: 99px;
  padding: 0.35rem 0.85rem; margin-bottom: 1.5rem;
}
.pulse { width: 6px; height: 6px; border-radius: 50%; background: var(--success); animation: pulse 2s infinite; }
@keyframes pulse { 0%,100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.5; transform: scale(0.8); } }

/* ── Hero Photo ────────────────────────────────────────── */
.hero-photo-wrap {
  position: relative; display: flex; justify-content: center;
}
.hero-photo-frame {
  position: relative; width: 340px; height: 400px;
}
.hero-photo-frame::before {
  content: ''; position: absolute;
  inset: -2px; border-radius: var(--radius-lg);
  background: linear-gradient(135deg, var(--accent), var(--accent2), var(--accent3));
  z-index: -1; animation: rotate-border 6s linear infinite;
}
@keyframes rotate-border { to { filter: hue-rotate(360deg); } }
.hero-photo {
  width: 100%; height: 100%; object-fit: cover;
  border-radius: var(--radius-lg);
  border: 3px solid var(--bg);
}
.hero-photo-placeholder {
  width: 100%; height: 100%;
  background: linear-gradient(135deg, var(--bg-card), #1a1d24);
  border-radius: var(--radius-lg);
  border: 3px solid var(--bg);
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  gap: 1rem; color: var(--muted); font-family: var(--font-mono); font-size: 0.8rem;
}
.hero-photo-placeholder svg { opacity: 0.3; }
.hero-badge {
  position: absolute; bottom: -16px; right: -16px;
  background: var(--bg-card); border: 1px solid var(--border);
  border-radius: var(--radius); padding: 0.75rem 1rem;
  font-family: var(--font-mono); font-size: 0.75rem;
  backdrop-filter: blur(10px);
}
.hero-badge-num { font-size: 1.4rem; font-weight: 700; color: var(--accent); display: block; }
.hero-stats {
  position: absolute; top: -16px; left: -16px;
  background: var(--bg-card); border: 1px solid var(--border);
  border-radius: var(--radius); padding: 0.75rem 1rem;
  font-family: var(--font-mono); font-size: 0.75rem;
  backdrop-filter: blur(10px);
}
.hero-stats-row { display: flex; align-items: center; gap: 0.4rem; color: var(--success); }

/* ── Terminal typing ───────────────────────────────────── */
.terminal-block {
  margin-bottom: 1.5rem; background: #0d1117;
  border: 1px solid var(--border); border-radius: var(--radius);
  padding: 1rem 1.2rem; font-family: var(--font-mono); font-size: 0.78rem;
  line-height: 1.8;
}
.terminal-block .prompt { color: var(--success); }
.terminal-block .cmd    { color: var(--text); }
.terminal-block .output { color: var(--muted); }
.terminal-block .val    { color: var(--accent); }
.cursor { display: inline-block; width: 8px; height: 14px; background: var(--accent); animation: blink 1s infinite; vertical-align: middle; }
@keyframes blink { 0%,100% { opacity: 1; } 50% { opacity: 0; } }

/* ── About ─────────────────────────────────────────────── */
#about { border-top: 1px solid var(--border); }
.about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: start; }
.about-text p { color: var(--muted); line-height: 1.8; margin-bottom: 1rem; }
.skills-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 1.5rem; }
.skill-card {
  background: var(--bg-card); border: 1px solid var(--border);
  border-radius: var(--radius); padding: 1rem;
  transition: var(--transition);
}
.skill-card:hover { border-color: var(--accent); transform: translateY(-2px); }
.skill-card-head { display: flex; align-items: center; gap: 0.6rem; margin-bottom: 0.5rem; }
.skill-icon {
  width: 32px; height: 32px; border-radius: 8px;
  background: rgba(0,229,255,0.1); display: flex; align-items: center; justify-content: center;
  font-size: 1rem;
}
.skill-card-name { font-family: var(--font-head); font-size: 0.9rem; font-weight: 700; }
.skill-bar { height: 3px; background: var(--border); border-radius: 99px; overflow: hidden; }
.skill-fill { height: 100%; background: linear-gradient(90deg, var(--accent), var(--accent2)); border-radius: 99px; transition: width 1.5s ease; }

/* Tools tags */
.tools-list { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 1rem; }
.tag {
  font-family: var(--font-mono); font-size: 0.72rem;
  padding: 0.3rem 0.7rem; border-radius: 6px;
  background: rgba(0,229,255,0.06); border: 1px solid rgba(0,229,255,0.15);
  color: var(--accent); transition: var(--transition);
}
.tag:hover { background: rgba(0,229,255,0.15); }
.tag.purple { color: var(--accent2); background: rgba(123,97,255,0.06); border-color: rgba(123,97,255,0.2); }
.tag.orange { color: var(--accent3); background: rgba(255,107,53,0.06); border-color: rgba(255,107,53,0.2); }

/* ── Projects ──────────────────────────────────────────── */
#projects { border-top: 1px solid var(--border); }
.projects-filter { display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 2.5rem; }
.filter-btn {
  font-family: var(--font-mono); font-size: 0.78rem;
  padding: 0.4rem 1rem; border-radius: 8px; cursor: pointer;
  background: transparent; color: var(--muted); border: 1px solid var(--border);
  transition: var(--transition);
}
.filter-btn:hover, .filter-btn.active {
  background: rgba(0,229,255,0.1); color: var(--accent); border-color: rgba(0,229,255,0.3);
}
.projects-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
.project-card {
  background: var(--bg-card); border: 1px solid var(--border);
  border-radius: var(--radius-lg); overflow: hidden;
  transition: var(--transition); cursor: pointer;
  display: flex; flex-direction: column;
}
.project-card:hover { border-color: rgba(0,229,255,0.3); transform: translateY(-4px); box-shadow: var(--shadow); }
.project-header {
  padding: 1.5rem; background: linear-gradient(135deg, #111318, #0d1117);
  border-bottom: 1px solid var(--border); position: relative; overflow: hidden;
}
.project-header::after {
  content: ''; position: absolute; inset: 0;
  background: linear-gradient(135deg, rgba(0,229,255,0.04), transparent);
}
.project-icon { font-size: 2rem; margin-bottom: 0.75rem; }
.project-category {
  font-family: var(--font-mono); font-size: 0.7rem; text-transform: uppercase;
  letter-spacing: 0.1em; padding: 0.2rem 0.6rem; border-radius: 4px;
  display: inline-block; margin-bottom: 0.5rem;
}
.cat-devops  { color: var(--accent);  background: rgba(0,229,255,0.1); }
.cat-linux   { color: var(--accent3); background: rgba(255,107,53,0.1); }
.cat-network { color: var(--accent2); background: rgba(123,97,255,0.1); }
.cat-docker  { color: #2496ed; background: rgba(36,150,237,0.1); }
.cat-k8s     { color: #326ce5; background: rgba(50,108,229,0.1); }
.cat-monitor { color: var(--success); background: rgba(34,197,94,0.1); }
.project-title { font-family: var(--font-head); font-size: 1.05rem; font-weight: 700; line-height: 1.3; }
.project-body { padding: 1.25rem 1.5rem; flex: 1; display: flex; flex-direction: column; gap: 1rem; }
.project-desc { font-size: 0.88rem; color: var(--muted); line-height: 1.6; }
.project-tech { display: flex; flex-wrap: wrap; gap: 0.4rem; }
.project-footer { display: flex; gap: 0.75rem; padding: 1rem 1.5rem; border-top: 1px solid var(--border); }
.btn-project {
  flex: 1; padding: 0.55rem; border-radius: 8px; font-family: var(--font-mono);
  font-size: 0.78rem; cursor: pointer; transition: var(--transition);
  text-align: center; display: flex; align-items: center; justify-content: center; gap: 0.4rem;
}
.btn-live { background: rgba(0,229,255,0.1); color: var(--accent); border: 1px solid rgba(0,229,255,0.2); }
.btn-live:hover { background: rgba(0,229,255,0.2); }
.btn-code { background: rgba(255,255,255,0.04); color: var(--muted); border: 1px solid var(--border); }
.btn-code:hover { color: var(--text); border-color: rgba(255,255,255,0.2); }
.cv-download-section {
  margin-top: 3rem; padding: 2rem;
  background: linear-gradient(135deg, rgba(0,229,255,0.05), rgba(123,97,255,0.05));
  border: 1px solid rgba(0,229,255,0.15); border-radius: var(--radius-lg);
  display: flex; align-items: center; justify-content: space-between; gap: 2rem;
  flex-wrap: wrap;
}
.cv-info h3 { font-family: var(--font-head); font-size: 1.2rem; font-weight: 700; margin-bottom: 0.3rem; }
.cv-info p  { font-size: 0.9rem; color: var(--muted); }

/* ── Contact ───────────────────────────────────────────── */
#contact { border-top: 1px solid var(--border); }
.contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; }
.contact-info { display: flex; flex-direction: column; gap: 1.5rem; }
.contact-item {
  display: flex; align-items: center; gap: 1rem;
  padding: 1rem; background: var(--bg-card);
  border: 1px solid var(--border); border-radius: var(--radius);
  transition: var(--transition);
}
.contact-item:hover { border-color: var(--accent); }
.contact-item-icon {
  width: 40px; height: 40px; border-radius: 10px;
  background: rgba(0,229,255,0.1); display: flex; align-items: center; justify-content: center;
  font-size: 1.1rem; flex-shrink: 0;
}
.contact-item-text { font-size: 0.85rem; color: var(--muted); }
.contact-item-val  { font-family: var(--font-mono); font-size: 0.85rem; color: var(--text); font-weight: 500; }
.contact-form { display: flex; flex-direction: column; gap: 1rem; }
.form-group { display: flex; flex-direction: column; gap: 0.4rem; }
.form-label { font-family: var(--font-mono); font-size: 0.78rem; color: var(--muted); }
.form-input, .form-textarea {
  background: var(--bg-card); border: 1px solid var(--border);
  border-radius: var(--radius); padding: 0.75rem 1rem;
  color: var(--text); font-family: var(--font-body); font-size: 0.9rem;
  transition: var(--transition); outline: none;
}
.form-input:focus, .form-textarea:focus { border-color: var(--accent); box-shadow: 0 0 0 3px rgba(0,229,255,0.08); }
.form-textarea { resize: vertical; min-height: 120px; }
.form-status { font-family: var(--font-mono); font-size: 0.8rem; text-align: center; padding: 0.5rem; border-radius: 8px; display: none; }
.form-status.success { color: var(--success); background: rgba(34,197,94,0.1); display: block; }
.form-status.error   { color: #ef4444; background: rgba(239,68,68,0.1); display: block; }

/* ── Footer ────────────────────────────────────────────── */
footer {
  border-top: 1px solid var(--border); padding: 2.5rem 2rem;
  background: rgba(10,12,16,0.95);
}
.footer-inner {
  max-width: 1200px; margin: 0 auto;
  display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1.5rem;
}
.footer-brand { font-family: var(--font-head); font-size: 1.1rem; font-weight: 800; }
.footer-brand p { font-family: var(--font-body); font-size: 0.82rem; color: var(--muted); font-weight: 400; margin-top: 0.2rem; }
.footer-links { display: flex; gap: 1rem; align-items: center; }
.footer-link {
  width: 40px; height: 40px; border-radius: 10px;
  background: var(--bg-card); border: 1px solid var(--border);
  display: flex; align-items: center; justify-content: center;
  font-size: 1.1rem; transition: var(--transition);
}
.footer-link:hover { border-color: var(--accent); background: rgba(0,229,255,0.08); transform: translateY(-2px); }
.footer-copy { font-family: var(--font-mono); font-size: 0.75rem; color: var(--muted); }
.footer-copy span { color: var(--accent); }

/* ── Scroll to top ─────────────────────────────────────── */
#scroll-top {
  position: fixed; bottom: 2rem; right: 2rem; z-index: 999;
  width: 44px; height: 44px; border-radius: 12px;
  background: var(--bg-card); border: 1px solid var(--border);
  display: flex; align-items: center; justify-content: center;
  cursor: pointer; transition: var(--transition); opacity: 0; pointer-events: none;
  font-size: 1rem;
}
#scroll-top.visible { opacity: 1; pointer-events: all; }
#scroll-top:hover { border-color: var(--accent); transform: translateY(-2px); }

/* ── Animations ────────────────────────────────────────── */
.fade-in { opacity: 0; transform: translateY(24px); transition: opacity 0.7s ease, transform 0.7s ease; }
.fade-in.visible { opacity: 1; transform: translateY(0); }
.stagger > * { opacity: 0; transform: translateY(20px); transition: opacity 0.6s ease, transform 0.6s ease; }
.stagger > *.visible { opacity: 1; transform: translateY(0); }

/* ── Mobile menu ───────────────────────────────────────── */
@media (max-width: 768px) {
  .hamburger { display: flex; }
  .nav-links {
    position: fixed; top: 68px; left: 0; right: 0;
    background: var(--bg); border-bottom: 1px solid var(--border);
    flex-direction: column; padding: 1rem; gap: 0.25rem;
    transform: translateY(-120%); transition: var(--transition);
    z-index: 999;
  }
  .nav-links.open { transform: translateY(0); }
  .nav-links a { padding: 0.75rem 1rem; }
  .hero-inner { grid-template-columns: 1fr; text-align: center; }
  .hero-photo-wrap { display: none; }
  .hero-btns { justify-content: center; }
  .hero-eyebrow { justify-content: center; }
  .about-grid, .contact-grid { grid-template-columns: 1fr; gap: 2rem; }
  .projects-grid { grid-template-columns: 1fr; }
  .skills-grid { grid-template-columns: 1fr; }
  .cv-download-section { flex-direction: column; text-align: center; }
  .footer-inner { flex-direction: column; text-align: center; }
}
@media (min-width: 769px) and (max-width: 1024px) {
  .projects-grid { grid-template-columns: 1fr 1fr; }
}
ENDCSS
log "CSS généré"

# ══════════════════════════════════════════════════════════════
# FICHIER : assets/js/script.js
# ══════════════════════════════════════════════════════════════
info "Génération du JavaScript..."
cat > "$PORTFOLIO_DIR/assets/js/script.js" << 'ENDJS'
/* ══════════════════════════════════════════════════════════
   PORTFOLIO DEVOPS - JavaScript Principal
   ══════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Navbar scroll behavior ──────────────────────────── */
  const navbar  = document.getElementById('navbar');
  const scrollTopBtn = document.getElementById('scroll-top');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
      navbar?.classList.add('scrolled');
      scrollTopBtn?.classList.add('visible');
    } else {
      navbar?.classList.remove('scrolled');
      scrollTopBtn?.classList.remove('visible');
    }
    updateActiveNav();
  });
  scrollTopBtn?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  /* ── Active nav link on scroll ───────────────────────── */
  function updateActiveNav() {
    const sections = document.querySelectorAll('section[id], div[id]');
    const links    = document.querySelectorAll('.nav-links a[href^="#"]');
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 200) current = s.id;
    });
    links.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
  }

  /* ── Mobile hamburger ────────────────────────────────── */
  const hamburger = document.querySelector('.hamburger');
  const navLinks  = document.querySelector('.nav-links');
  hamburger?.addEventListener('click', () => navLinks?.classList.toggle('open'));
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', () => navLinks?.classList.remove('open'));
  });

  /* ── Smooth scroll for anchor links ─────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  /* ── Intersection Observer for fade-in ───────────────── */
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, entry.target.dataset.delay || 0);
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.fade-in').forEach((el, i) => {
    el.dataset.delay = i * 80;
    io.observe(el);
  });
  document.querySelectorAll('.stagger > *').forEach((el, i) => {
    el.dataset.delay = i * 100;
    io.observe(el);
  });

  /* ── Skill bars animation ────────────────────────────── */
  const skillIO = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.skill-fill').forEach(bar => {
          bar.style.width = bar.dataset.width + '%';
        });
        skillIO.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  document.querySelectorAll('.skills-grid').forEach(g => skillIO.observe(g));

  /* ── Project filter ──────────────────────────────────── */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      projectCards.forEach(card => {
        const show = filter === 'all' || card.dataset.category === filter;
        card.style.display = show ? 'flex' : 'none';
        if (show) setTimeout(() => card.style.opacity = '1', 10);
      });
    });
  });

  /* ── Contact form (via Formspree) ────────────────────── */
  const form   = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  form?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = 'Envoi en cours...'; btn.disabled = true;
    const data = new FormData(form);
    try {
      const res = await fetch(form.action, {
        method: 'POST', body: data, headers: { 'Accept': 'application/json' }
      });
      if (res.ok) {
        status.textContent = '✔ Message envoyé ! Je vous réponds sous 24h.';
        status.className = 'form-status success';
        form.reset();
      } else {
        throw new Error();
      }
    } catch {
      status.textContent = '✘ Erreur lors de l\'envoi. Réessayez ou contactez-moi directement.';
      status.className = 'form-status error';
    }
    btn.textContent = 'Envoyer le message'; btn.disabled = false;
  });

  /* ── Terminal typing animation ───────────────────────── */
  function typeText(el, text, speed = 40) {
    if (!el) return;
    el.textContent = '';
    let i = 0;
    const type = () => {
      if (i < text.length) { el.textContent += text[i++]; setTimeout(type, speed); }
    };
    type();
  }
  const cmdEl = document.querySelector('.type-cmd');
  if (cmdEl) setTimeout(() => typeText(cmdEl, cmdEl.dataset.text || ''), 800);

  /* ── Floating particles (canvas) ────────────────────── */
  const canvas = document.createElement('canvas');
  canvas.id = 'particles';
  canvas.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:0;opacity:0.3';
  document.body.prepend(canvas);
  const ctx = canvas.getContext('2d');
  let W, H, particles = [];
  const resize = () => { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; };
  resize(); window.addEventListener('resize', resize);
  for (let i = 0; i < 60; i++) particles.push({
    x: Math.random()*W, y: Math.random()*H,
    vx: (Math.random()-0.5)*0.3, vy: (Math.random()-0.5)*0.3,
    r: Math.random()*1.5+0.5, alpha: Math.random()*0.5+0.1
  });
  (function animate() {
    ctx.clearRect(0,0,W,H);
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
      ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle = `rgba(0,229,255,${p.alpha})`; ctx.fill();
    });
    requestAnimationFrame(animate);
  })();

  console.log('%c⚡ Portfolio DevOps — Built with ❤️', 'color:#00e5ff;font-family:monospace;font-size:14px;font-weight:bold;');
});
ENDJS
log "JavaScript généré"

# ══════════════════════════════════════════════════════════════
# FICHIER : index.html
# ══════════════════════════════════════════════════════════════
info "Génération de index.html..."
cat > "$PORTFOLIO_DIR/index.html" << ENDHTML
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Portfolio de $NAME — $TITLE spécialisé DevOps, Linux, Réseaux, Systèmes">
  <meta name="keywords" content="DevOps, Linux, Kubernetes, Docker, CI/CD, Ansible, Terraform, Réseaux">
  <meta property="og:title" content="$NAME — $TITLE">
  <meta property="og:description" content="Portfolio professionnel DevOps">
  <meta property="og:type" content="website">
  <title>$NAME · $TITLE</title>
  <link rel="stylesheet" href="assets/css/style.css">
  <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>⚡</text></svg>">
</head>
<body>

<!-- Background orbs -->
<div class="bg-orbs" aria-hidden="true">
  <div class="orb orb-1"></div>
  <div class="orb orb-2"></div>
  <div class="orb orb-3"></div>
</div>

<!-- ── NAVBAR ─────────────────────────────────────────── -->
<nav id="navbar" role="navigation" aria-label="Navigation principale">
  <div class="nav-inner">
    <a href="#home" class="nav-logo">$NAME<span>.dev</span></a>
    <ul class="nav-links" id="nav-menu">
      <li><a href="#home"     class="active">Accueil</a></li>
      <li><a href="#about">À propos</a></li>
      <li><a href="#projects">Projets</a></li>
      <li><a href="#contact"  class="nav-cta">Contact</a></li>
    </ul>
    <button class="hamburger" aria-label="Menu mobile" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>

<!-- ── HERO ───────────────────────────────────────────── -->
<section id="home" class="page" aria-label="Introduction">
  <div class="hero-inner">
    <div class="hero-content">
      <div class="hero-status fade-in">
        <span class="pulse"></span>
        Disponible pour missions & opportunités
      </div>
      <div class="hero-eyebrow fade-in">DevOps Engineer</div>
      <h1 class="hero-name fade-in">$NAME</h1>
      <p class="hero-role fade-in">Spécialiste <span class="highlight">Infrastructure</span> & <span class="gradient-text">Automatisation</span></p>

      <div class="terminal-block fade-in">
        <div><span class="prompt">\$ </span><span class="cmd type-cmd" data-text="whoami --verbose">whoami --verbose</span><span class="cursor"></span></div>
        <div><span class="output">→ role:      </span><span class="val">DevOps Engineer</span></div>
        <div><span class="output">→ location:  </span><span class="val">$LOCATION</span></div>
        <div><span class="output">→ stack:     </span><span class="val">Linux · Docker · K8s · Ansible · CI/CD</span></div>
        <div><span class="output">→ status:    </span><span class="val" style="color:var(--success)">open_to_work=true</span></div>
      </div>

      <p class="hero-desc fade-in">
        Ingénieur DevOps passionné par l'automatisation, l'infrastructure cloud et la culture CI/CD.
        Je construis des pipelines robustes, orchestre des conteneurs et optimise les systèmes Linux
        pour des déploiements rapides et fiables.
      </p>
      <div class="hero-btns fade-in">
        <a href="#projects" class="btn btn-primary">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
          Voir mes projets
        </a>
        <a href="cv/$CV_FILENAME" download class="btn btn-outline">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
          Télécharger CV
        </a>
      </div>
    </div>

    <div class="hero-photo-wrap fade-in">
      <div class="hero-photo-frame">
        <!-- Remplacez par votre vraie photo : -->
        <!-- <img src="assets/img/profile.jpg" alt="$NAME — Photo de profil" class="hero-photo"> -->
        <div class="hero-photo-placeholder">
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
          </svg>
          <span>Votre photo ici<br><small>assets/img/profile.jpg</small></span>
        </div>
        <div class="hero-badge">
          <span class="hero-badge-num">6+</span>
          Projets DevOps
        </div>
        <div class="hero-stats">
          <div class="hero-stats-row">
            <span class="pulse"></span>
            Infrastructure as Code
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ── À PROPOS ────────────────────────────────────────── -->
<section id="about" aria-label="À propos de moi">
  <div class="section">
    <div class="section-tag">À propos</div>
    <h2 class="section-title">Mon profil <span class="gradient-text">technique</span></h2>

    <div class="about-grid">
      <div class="about-text">
        <p>Ingénieur DevOps avec une solide expertise en <strong>administration Linux</strong>, <strong>réseaux</strong>, <strong>conteneurisation</strong> et <strong>automatisation d'infrastructure</strong>. Passionné par la culture DevOps, je m'efforce de briser les silos entre développement et opérations.</p>
        <p>Mon approche : tout automatiser, tout monitorer, tout documenter. Je crois que la fiabilité d'une infrastructure se mesure à sa capacité à se déployer seule, à se rétablir seule et à alerter intelligemment.</p>

        <div class="tools-list stagger">
          <span class="tag">Linux / Bash</span>
          <span class="tag">Docker</span>
          <span class="tag purple">Kubernetes</span>
          <span class="tag">Ansible</span>
          <span class="tag orange">Terraform</span>
          <span class="tag">Jenkins</span>
          <span class="tag purple">GitLab CI/CD</span>
          <span class="tag">GitHub Actions</span>
          <span class="tag">Prometheus</span>
          <span class="tag orange">Grafana</span>
          <span class="tag">Nginx</span>
          <span class="tag purple">Python</span>
          <span class="tag">AWS / GCP</span>
          <span class="tag orange">TCP/IP / BGP</span>
          <span class="tag">Wireshark</span>
          <span class="tag purple">Cisco IOS</span>
        </div>
      </div>

      <div class="skills-grid stagger">
        <div class="skill-card">
          <div class="skill-card-head">
            <div class="skill-icon">🐧</div>
            <span class="skill-card-name">Linux & Sys</span>
          </div>
          <div class="skill-bar"><div class="skill-fill" data-width="92" style="width:0"></div></div>
        </div>
        <div class="skill-card">
          <div class="skill-card-head">
            <div class="skill-icon">🐳</div>
            <span class="skill-card-name">Docker / K8s</span>
          </div>
          <div class="skill-bar"><div class="skill-fill" data-width="88" style="width:0"></div></div>
        </div>
        <div class="skill-card">
          <div class="skill-card-head">
            <div class="skill-icon">⚙️</div>
            <span class="skill-card-name">CI/CD</span>
          </div>
          <div class="skill-bar"><div class="skill-fill" data-width="85" style="width:0"></div></div>
        </div>
        <div class="skill-card">
          <div class="skill-card-head">
            <div class="skill-icon">🌐</div>
            <span class="skill-card-name">Réseaux</span>
          </div>
          <div class="skill-bar"><div class="skill-fill" data-width="80" style="width:0"></div></div>
        </div>
        <div class="skill-card">
          <div class="skill-card-head">
            <div class="skill-icon">☁️</div>
            <span class="skill-card-name">Cloud (AWS/GCP)</span>
          </div>
          <div class="skill-bar"><div class="skill-fill" data-width="75" style="width:0"></div></div>
        </div>
        <div class="skill-card">
          <div class="skill-card-head">
            <div class="skill-icon">📊</div>
            <span class="skill-card-name">Monitoring</span>
          </div>
          <div class="skill-bar"><div class="skill-fill" data-width="83" style="width:0"></div></div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ── PROJETS ─────────────────────────────────────────── -->
<section id="projects" aria-label="Mes projets">
  <div class="section">
    <div class="section-tag">Projets</div>
    <h2 class="section-title">Réalisations <span class="gradient-text">techniques</span></h2>

    <div class="projects-filter">
      <button class="filter-btn active" data-filter="all">Tous</button>
      <button class="filter-btn" data-filter="devops">CI/CD</button>
      <button class="filter-btn" data-filter="linux">Linux</button>
      <button class="filter-btn" data-filter="network">Réseaux</button>
      <button class="filter-btn" data-filter="docker">Docker</button>
      <button class="filter-btn" data-filter="k8s">Kubernetes</button>
      <button class="filter-btn" data-filter="monitor">Monitoring</button>
    </div>

    <div class="projects-grid stagger">

      <article class="project-card" data-category="devops">
        <div class="project-header">
          <div class="project-icon">🚀</div>
          <span class="project-category cat-devops">CI/CD</span>
          <h3 class="project-title">Pipeline CI/CD Automatisé</h3>
        </div>
        <div class="project-body">
          <p class="project-desc">Pipeline complet Jenkins + GitHub Actions : build, test, scan de sécurité, déploiement blue/green sur K8s avec rollback automatique.</p>
          <div class="project-tech">
            <span class="tag">Jenkins</span>
            <span class="tag purple">GitHub Actions</span>
            <span class="tag">Docker</span>
          </div>
        </div>
        <div class="project-footer">
          <a href="projects/ci-cd-pipeline/index.html" class="btn-project btn-live">🔗 Voir le projet</a>
          <a href="$GITHUB/ci-cd-pipeline" target="_blank" rel="noopener" class="btn-project btn-code">⌥ Code</a>
        </div>
      </article>

      <article class="project-card" data-category="monitor">
        <div class="project-header">
          <div class="project-icon">📊</div>
          <span class="project-category cat-monitor">Monitoring</span>
          <h3 class="project-title">Stack Monitoring Prometheus/Grafana</h3>
        </div>
        <div class="project-body">
          <p class="project-desc">Déploiement d'une stack de monitoring complète avec Prometheus, Grafana, AlertManager et dashboards custom pour infra Linux/Docker.</p>
          <div class="project-tech">
            <span class="tag orange">Prometheus</span>
            <span class="tag orange">Grafana</span>
            <span class="tag">Alertmanager</span>
          </div>
        </div>
        <div class="project-footer">
          <a href="projects/monitoring-stack/index.html" class="btn-project btn-live">🔗 Voir le projet</a>
          <a href="$GITHUB/monitoring-stack" target="_blank" rel="noopener" class="btn-project btn-code">⌥ Code</a>
        </div>
      </article>

      <article class="project-card" data-category="k8s">
        <div class="project-header">
          <div class="project-icon">☸️</div>
          <span class="project-category cat-k8s">Kubernetes</span>
          <h3 class="project-title">Infrastructure K8s sur AWS</h3>
        </div>
        <div class="project-body">
          <p class="project-desc">Cluster Kubernetes EKS provisionné avec Terraform, autoscaling, ingress Nginx, cert-manager TLS automatique et Helm charts.</p>
          <div class="project-tech">
            <span class="tag orange">Terraform</span>
            <span class="tag purple">Kubernetes</span>
            <span class="tag">AWS EKS</span>
          </div>
        </div>
        <div class="project-footer">
          <a href="projects/infrastructure-k8s/index.html" class="btn-project btn-live">🔗 Voir le projet</a>
          <a href="$GITHUB/infra-k8s" target="_blank" rel="noopener" class="btn-project btn-code">⌥ Code</a>
        </div>
      </article>

      <article class="project-card" data-category="linux">
        <div class="project-header">
          <div class="project-icon">🐧</div>
          <span class="project-category cat-linux">Linux</span>
          <h3 class="project-title">Automatisation Bash & Ansible</h3>
        </div>
        <div class="project-body">
          <p class="project-desc">Collection de scripts Bash et playbooks Ansible pour l'automatisation de serveurs Linux : hardening, backup, déploiement, audit.</p>
          <div class="project-tech">
            <span class="tag">Bash</span>
            <span class="tag purple">Ansible</span>
            <span class="tag">Python</span>
          </div>
        </div>
        <div class="project-footer">
          <a href="projects/linux-automation/index.html" class="btn-project btn-live">🔗 Voir le projet</a>
          <a href="$GITHUB/linux-automation" target="_blank" rel="noopener" class="btn-project btn-code">⌥ Code</a>
        </div>
      </article>

      <article class="project-card" data-category="docker">
        <div class="project-header">
          <div class="project-icon">🐳</div>
          <span class="project-category cat-docker">Docker</span>
          <h3 class="project-title">Docker Compose Lab</h3>
        </div>
        <div class="project-body">
          <p class="project-desc">Environnements Docker Compose multi-services : stack LAMP, ELK, WordPress+MariaDB+Redis, microservices avec reverse proxy Traefik.</p>
          <div class="project-tech">
            <span class="tag">Docker Compose</span>
            <span class="tag">Traefik</span>
            <span class="tag orange">Nginx</span>
          </div>
        </div>
        <div class="project-footer">
          <a href="projects/docker-compose-lab/index.html" class="btn-project btn-live">🔗 Voir le projet</a>
          <a href="$GITHUB/docker-lab" target="_blank" rel="noopener" class="btn-project btn-code">⌥ Code</a>
        </div>
      </article>

      <article class="project-card" data-category="network">
        <div class="project-header">
          <div class="project-icon">🔒</div>
          <span class="project-category cat-network">Réseaux</span>
          <h3 class="project-title">Sécurité Réseau & VPN</h3>
        </div>
        <div class="project-body">
          <p class="project-desc">Mise en place d'infrastructure réseau sécurisée : VPN WireGuard, firewall iptables/nftables, segmentation VLAN, analyse Wireshark.</p>
          <div class="project-tech">
            <span class="tag purple">WireGuard</span>
            <span class="tag">iptables</span>
            <span class="tag orange">Wireshark</span>
          </div>
        </div>
        <div class="project-footer">
          <a href="projects/network-security/index.html" class="btn-project btn-live">🔗 Voir le projet</a>
          <a href="$GITHUB/network-security" target="_blank" rel="noopener" class="btn-project btn-code">⌥ Code</a>
        </div>
      </article>

    </div>

    <!-- Téléchargement CV -->
    <div class="cv-download-section fade-in">
      <div class="cv-info">
        <h3>📄 Mon Curriculum Vitae</h3>
        <p>Téléchargez mon CV complet — expériences, certifications et compétences techniques</p>
      </div>
      <a href="cv/$CV_FILENAME" download class="btn btn-primary">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
        Télécharger le CV (PDF)
      </a>
    </div>
  </div>
</section>

<!-- ── CONTACT ─────────────────────────────────────────── -->
<section id="contact" aria-label="Contact">
  <div class="section">
    <div class="section-tag">Contact</div>
    <h2 class="section-title">Travaillons <span class="gradient-text">ensemble</span></h2>

    <div class="contact-grid">
      <div class="contact-info stagger">
        <div class="contact-item">
          <div class="contact-item-icon">📧</div>
          <div>
            <div class="contact-item-text">Email</div>
            <a href="mailto:$EMAIL" class="contact-item-val">$EMAIL</a>
          </div>
        </div>
        <div class="contact-item">
          <div class="contact-item-icon">📍</div>
          <div>
            <div class="contact-item-text">Localisation</div>
            <span class="contact-item-val">$LOCATION</span>
          </div>
        </div>
        <div class="contact-item">
          <div class="contact-item-icon">💼</div>
          <div>
            <div class="contact-item-text">LinkedIn</div>
            <a href="$LINKEDIN" target="_blank" rel="noopener" class="contact-item-val">Voir mon profil →</a>
          </div>
        </div>
        <div class="contact-item">
          <div class="contact-item-icon">🐙</div>
          <div>
            <div class="contact-item-text">GitHub</div>
            <a href="$GITHUB" target="_blank" rel="noopener" class="contact-item-val">Voir mes repos →</a>
          </div>
        </div>
      </div>

      <form id="contact-form" action="https://formspree.io/f/VOTRE_ID_FORMSPREE" method="POST" class="contact-form fade-in" novalidate>
        <div class="form-group">
          <label class="form-label" for="name">Nom complet</label>
          <input type="text" id="name" name="name" class="form-input" placeholder="Jean Dupont" required autocomplete="name">
        </div>
        <div class="form-group">
          <label class="form-label" for="email">Adresse email</label>
          <input type="email" id="email" name="email" class="form-input" placeholder="jean@exemple.com" required autocomplete="email">
        </div>
        <div class="form-group">
          <label class="form-label" for="subject">Sujet</label>
          <input type="text" id="subject" name="subject" class="form-input" placeholder="Mission DevOps, collaboration...">
        </div>
        <div class="form-group">
          <label class="form-label" for="message">Message</label>
          <textarea id="message" name="message" class="form-textarea" placeholder="Décrivez votre projet ou opportunité..." required></textarea>
        </div>
        <button type="submit" class="btn btn-primary" style="width:100%;justify-content:center;">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
          Envoyer le message
        </button>
        <div id="form-status" class="form-status" role="alert"></div>
      </form>
    </div>
  </div>
</section>

<!-- ── FOOTER ──────────────────────────────────────────── -->
<footer role="contentinfo">
  <div class="footer-inner">
    <div class="footer-brand">
      $NAME
      <p>$TITLE · $LOCATION</p>
    </div>
    <nav class="footer-links" aria-label="Réseaux sociaux">
      <a href="$LINKEDIN"  target="_blank" rel="noopener" class="footer-link" title="LinkedIn" aria-label="LinkedIn">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
      </a>
      <a href="$GITHUB"    target="_blank" rel="noopener" class="footer-link" title="GitHub" aria-label="GitHub">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
      </a>
      <a href="$INSTAGRAM" target="_blank" rel="noopener" class="footer-link" title="Instagram" aria-label="Instagram">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
      </a>
      <a href="mailto:$EMAIL" class="footer-link" title="Email" aria-label="Email">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
      </a>
    </nav>
    <p class="footer-copy">© $(date +%Y) <span>$NAME</span> · Fait avec ❤️ &amp; DevOps</p>
  </div>
</footer>

<button id="scroll-top" aria-label="Retour en haut">↑</button>
<script src="assets/js/script.js"></script>
</body>
</html>
ENDHTML
log "index.html généré"

# ══════════════════════════════════════════════════════════════
# Pages détail projets (template réutilisable)
# ══════════════════════════════════════════════════════════════
info "Génération des pages projets..."

generate_project_page() {
  local dir="$1" icon="$2" cat="$3" cat_class="$4" title="$5" desc="$6" tags="$7" github_url="$8"
  mkdir -p "$PORTFOLIO_DIR/projects/$dir"
  cat > "$PORTFOLIO_DIR/projects/$dir/index.html" << PROJ_HTML
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>$title · $NAME</title>
  <link rel="stylesheet" href="../../assets/css/style.css">
  <style>
    .proj-hero { padding: 8rem 2rem 4rem; max-width: 900px; margin: 0 auto; }
    .proj-content { max-width: 900px; margin: 0 auto; padding: 0 2rem 6rem; }
    .back-link { display:inline-flex;align-items:center;gap:.5rem;font-family:var(--font-mono);font-size:.82rem;color:var(--muted);margin-bottom:2rem;transition:var(--transition); }
    .back-link:hover { color:var(--accent); }
    .proj-meta { display:flex;gap:1rem;flex-wrap:wrap;margin-bottom:2rem; }
    .code-block { background:#0d1117;border:1px solid var(--border);border-radius:var(--radius);padding:1.5rem;font-family:var(--font-mono);font-size:.82rem;line-height:1.8;overflow-x:auto;margin:1.5rem 0; }
    .code-block .comment { color:var(--muted); } .code-block .key { color:var(--accent2); }
    .code-block .val { color:var(--accent); } .code-block .str { color:#a5d6ff; }
    h3 { font-family:var(--font-head);font-size:1.2rem;font-weight:700;margin:2rem 0 .75rem; }
    p { color:var(--muted);line-height:1.8;margin-bottom:1rem; }
    .feature-list { display:flex;flex-direction:column;gap:.5rem;margin-bottom:1.5rem; }
    .feature-list li { display:flex;align-items:flex-start;gap:.6rem;color:var(--muted);font-size:.9rem; }
    .feature-list li::before { content:'▸';color:var(--accent);flex-shrink:0;margin-top:.1rem; }
  </style>
</head>
<body>
<div class="bg-orbs" aria-hidden="true"><div class="orb orb-1"></div><div class="orb orb-2"></div></div>
<nav id="navbar">
  <div class="nav-inner">
    <a href="../../index.html" class="nav-logo">$NAME<span>.dev</span></a>
    <ul class="nav-links">
      <li><a href="../../index.html#home">Accueil</a></li>
      <li><a href="../../index.html#about">À propos</a></li>
      <li><a href="../../index.html#projects" class="active">Projets</a></li>
      <li><a href="../../index.html#contact" class="nav-cta">Contact</a></li>
    </ul>
  </div>
</nav>
<main class="page">
  <div class="proj-hero">
    <a href="../../index.html#projects" class="back-link">← Retour aux projets</a>
    <div class="hero-eyebrow">$cat</div>
    <h1 class="hero-name" style="font-size:clamp(1.8rem,4vw,3rem);margin-bottom:1rem;">$icon $title</h1>
    <p style="font-size:1rem;color:var(--muted);max-width:600px;margin-bottom:2rem;">$desc</p>
    <div class="proj-meta">
      <span class="project-category $cat_class">$cat</span>
      $tags
    </div>
    <div class="hero-btns">
      <a href="$github_url" target="_blank" rel="noopener" class="btn btn-primary">🐙 Voir sur GitHub</a>
      <a href="../../index.html#contact" class="btn btn-outline">💬 Me contacter</a>
    </div>
  </div>
  <div class="proj-content fade-in">
    <h3>📋 Description du projet</h3>
    <p>$desc Ce projet illustre les bonnes pratiques DevOps appliquées à un cas concret.</p>
    <h3>⚙️ Architecture & Technologies</h3>
    <div class="code-block">
<span class="comment"># Structure du projet</span>
$dir/
├── <span class="val">README.md</span>           <span class="comment"># Documentation complète</span>
├── <span class="key">Makefile</span>            <span class="comment"># Commandes automatisées</span>
├── <span class="str">docker-compose.yml</span>  <span class="comment"># Services Docker</span>
├── <span class="val">scripts/</span>            <span class="comment"># Scripts d'automatisation</span>
└── <span class="key">config/</span>             <span class="comment"># Fichiers de configuration</span>
    </div>
    <h3>✅ Fonctionnalités principales</h3>
    <ul class="feature-list">
      <li>Déploiement entièrement automatisé via scripts Bash/Python</li>
      <li>Gestion des secrets et variables d'environnement sécurisée</li>
      <li>Monitoring intégré avec alertes configurables</li>
      <li>Documentation complète avec procédures opérationnelles</li>
      <li>Tests automatisés (unit, integration, smoke tests)</li>
    </ul>
    <div style="margin-top:2rem;">
      <a href="../../index.html#contact" class="btn btn-primary">📧 Discuter de ce projet</a>
    </div>
  </div>
</main>
<script src="../../assets/js/script.js"></script>
</body>
</html>
PROJ_HTML
}

generate_project_page "ci-cd-pipeline"       "🚀" "CI/CD DevOps"  "cat-devops"  "Pipeline CI/CD Automatisé"      "Pipeline Jenkins + GitHub Actions avec déploiement K8s blue/green et rollback automatique." '<span class="tag">Jenkins</span><span class="tag purple">K8s</span>'       "$GITHUB/ci-cd-pipeline"
generate_project_page "monitoring-stack"     "📊" "Monitoring"     "cat-monitor" "Stack Prometheus / Grafana"      "Monitoring complet avec Prometheus, Grafana, AlertManager et dashboards personnalisés."     '<span class="tag orange">Prometheus</span><span class="tag orange">Grafana</span>' "$GITHUB/monitoring-stack"
generate_project_page "infrastructure-k8s"  "☸️" "Kubernetes"     "cat-k8s"     "Infrastructure K8s sur AWS"      "Cluster EKS provisionné Terraform avec autoscaling, ingress Nginx et TLS automatique."      '<span class="tag orange">Terraform</span><span class="tag purple">EKS</span>'     "$GITHUB/infra-k8s"
generate_project_page "linux-automation"    "🐧" "Linux"          "cat-linux"   "Automatisation Bash & Ansible"   "Scripts de hardening, backup et déploiement automatisé pour serveurs Linux."                '<span class="tag">Bash</span><span class="tag purple">Ansible</span>'          "$GITHUB/linux-automation"
generate_project_page "docker-compose-lab"  "🐳" "Docker"         "cat-docker"  "Docker Compose Lab"              "Environnements multi-services : LAMP, ELK, WordPress+Redis avec reverse proxy Traefik."    '<span class="tag">Docker</span><span class="tag orange">Traefik</span>'         "$GITHUB/docker-lab"
generate_project_page "network-security"    "🔒" "Réseaux"        "cat-network" "Sécurité Réseau & VPN"           "Infrastructure réseau sécurisée : WireGuard, iptables, VLAN, analyse Wireshark."           '<span class="tag purple">WireGuard</span><span class="tag">iptables</span>'    "$GITHUB/network-security"

log "Pages projets générées"

# ══════════════════════════════════════════════════════════════
# GitHub Actions : déploiement automatique
# ══════════════════════════════════════════════════════════════
info "Génération GitHub Actions workflow..."
cat > "$PORTFOLIO_DIR/.github/workflows/deploy.yml" << 'ENDYML'
name: Deploy Portfolio to GitHub Pages

on:
  push:
    branches: [ "main" ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: '.'

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
ENDYML
log "GitHub Actions configuré"

# ══════════════════════════════════════════════════════════════
# README.md
# ══════════════════════════════════════════════════════════════
cat > "$PORTFOLIO_DIR/README.md" << ENDREADME
# 🚀 Portfolio DevOps — $NAME

Portfolio professionnel généré automatiquement.

## 📁 Structure
\`\`\`
portfolio/
├── index.html                  # Site principal (toutes sections)
├── assets/css/style.css        # Styles globaux
├── assets/js/script.js         # JavaScript interactif
├── assets/img/profile.jpg      # ← AJOUTEZ VOTRE PHOTO ICI
├── cv/mon-cv.pdf               # ← AJOUTEZ VOTRE CV ICI
├── projects/                   # Pages détail projets
└── .github/workflows/          # CI/CD GitHub Pages
\`\`\`

## ⚡ Démarrage rapide
\`\`\`bash
# Prévisualisation locale
npx serve . -p 3000
# ou
python3 -m http.server 3000
\`\`\`

## 🌐 Déploiement GitHub Pages
1. \`git init && git add . && git commit -m "init: portfolio"\`
2. Créez le repo GitHub : \`votre-nom.github.io\`
3. \`git remote add origin https://github.com/VOTRE_USER/votre-nom.github.io\`
4. \`git push -u origin main\`
5. Settings → Pages → Branch: main → Save
6. Site live : **https://VOTRE_USER.github.io**

## ✏️ Personnalisation
- **Photo** : Remplacez \`assets/img/profile.jpg\`
- **CV** : Ajoutez \`cv/mon-cv.pdf\`
- **Contact form** : Inscrivez-vous sur [formspree.io](https://formspree.io) et remplacez l'ID dans index.html
- **Infos** : Editez les variables en haut de \`generate-portfolio.sh\`
ENDREADME

# ══════════════════════════════════════════════════════════════
# .gitignore
# ══════════════════════════════════════════════════════════════
cat > "$PORTFOLIO_DIR/.gitignore" << 'ENDIGNORE'
.DS_Store
Thumbs.db
*.log
node_modules/
.env
ENDIGNORE

# ══════════════════════════════════════════════════════════════
# Placeholder CV
# ══════════════════════════════════════════════════════════════
touch "$PORTFOLIO_DIR/cv/PLACER_MON_CV_ICI.pdf"
touch "$PORTFOLIO_DIR/assets/img/PLACER_MA_PHOTO_ICI.jpg"

# ── Résumé final ───────────────────────────────────────────
section "✅ PORTFOLIO GÉNÉRÉ AVEC SUCCÈS !"

echo -e "${BOLD}📁 Structure créée :${RESET}"
find "$PORTFOLIO_DIR" -type f | sort | sed "s|$PORTFOLIO_DIR/|   ${GREEN}├──${RESET} |"

echo ""
echo -e "${BOLD}${YELLOW}🔧 Étapes suivantes :${RESET}"
echo -e "  ${CYAN}1.${RESET} Ajoutez votre photo   → ${BOLD}$PORTFOLIO_DIR/assets/img/profile.jpg${RESET}"
echo -e "  ${CYAN}2.${RESET} Ajoutez votre CV      → ${BOLD}$PORTFOLIO_DIR/cv/$CV_FILENAME${RESET}"
echo -e "  ${CYAN}3.${RESET} Inscrivez-vous sur    → ${BOLD}https://formspree.io${RESET} et mettez à jour l'ID dans index.html"
echo -e "  ${CYAN}4.${RESET} Éditez vos infos      → Variables en haut de ce script"
echo ""
echo -e "${BOLD}${YELLOW}🚀 Déploiement GitHub Pages :${RESET}"
echo -e "  ${GREEN}cd $PORTFOLIO_DIR${RESET}"
echo -e "  ${GREEN}git init && git add . && git commit -m 'init: portfolio devops'${RESET}"
echo -e "  ${GREEN}git remote add origin https://github.com/VOTRE_USER/votre-nom.github.io${RESET}"
echo -e "  ${GREEN}git push -u origin main${RESET}"
echo ""
echo -e "${BOLD}${CYAN}💡 Prévisualisation locale :${RESET}"
echo -e "  ${GREEN}cd $PORTFOLIO_DIR && python3 -m http.server 3000${RESET}"
echo -e "  Ouvrez : ${BOLD}http://localhost:3000${RESET}"
echo ""
echo -e "${BOLD}✨ Bon courage pour votre portfolio !${RESET}"
