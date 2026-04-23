# Portfolio V2 — Macean Christopher | React + Vite

Portfolio professionnel migré de HTML/CSS/JS vers React 19 + Vite 8.

---

## Table des matières

1. [Présentation](#présentation)
2. [Stack technique](#stack-technique)
3. [Architecture des fichiers](#architecture)
4. [Installation et lancement](#installation)
5. [Configuration EmailJS](#emailjs)
6. [Variables d'environnement](#variables-denvironnement)
7. [Scripts disponibles](#scripts)
8. [Déploiement sur Vercel](#déploiement)
9. [Tests](#tests)
10. [Ajouter un nouveau projet](#ajouter-un-projet)
11. [Mettre à jour le CV](#mettre-à-jour-le-cv)
12. [Migration vers Next.js](#migration-nextjs)
13. [Checklist avant déploiement](#checklist)

---

## Présentation

Portfolio DevOps personnel de Macean Christopher, étudiant en Licence Génie Logiciel, Réseaux & Systèmes à l'ISM Dakar. Présente les projets, certifications, expériences et un formulaire de contact fonctionnel via EmailJS.

---

## Stack technique

| Outil | Version |
|---|---|
| React | 19.2.x |
| Vite | 8.x |
| react-router-dom | 7.x |
| @emailjs/browser | 4.x |
| prop-types | 15.x |
| Vitest | 4.x |
| @testing-library/react | 16.x |

---

## Architecture

```
portfolio-v2/
├── public/
│   ├── assets/img/profile.jpeg   ← votre photo
│   ├── cv/mon-cv.pdf             ← votre CV
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── layout/               ← Navbar, Footer, ScrollToTop
│   │   ├── ui/                   ← Button, Tag, SkillBar, CertCard, ProjectCard...
│   │   └── sections/             ← HeroTerminal, CVDownload
│   ├── pages/
│   │   ├── Home/
│   │   ├── About/
│   │   ├── Projects/
│   │   │   └── ProjectDetail/
│   │   ├── Certifications/
│   │   ├── Contact/
│   │   └── NotFound/
│   ├── data/                     ← toutes les données personnelles
│   │   ├── personal.js
│   │   ├── projects.js
│   │   ├── certifications.js
│   │   ├── skills.js
│   │   └── experience.js
│   ├── hooks/
│   ├── styles/
│   └── utils/
├── .env.example
├── vercel.json
└── vite.config.js
```

---

## Installation

```bash
git clone <votre-repo>
cd portfolio-v2
npm install
cp .env.example .env.local
# Éditer .env.local avec vos vraies clés EmailJS
npm run dev
```

---

## EmailJS

### 1. Créer un compte
Aller sur emailjs.com → Sign Up (gratuit)

### 2. Créer un Email Service
Dashboard → Email Services → Add New Service → Gmail → Connect Account → Create Service
Copier le **Service ID** (ex: `service_abc123`)

### 3. Créer un Email Template
Dashboard → Email Templates → Create New Template
- Subject : `Message de {{from_name}} — Portfolio`
- Body :
```
Nom : {{from_name}}
Email : {{from_email}}
Sujet : {{subject}}
Message : {{message}}
```
Copier le **Template ID** (ex: `template_xyz789`)

### 4. Récupérer la Public Key
Dashboard → Account → General → Public Key (ex: `abcDEF123456`)

### 5. Configurer .env.local
```env
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=abcDEF123456
```

---

## Variables d'environnement

| Variable | Description |
|---|---|
| `VITE_EMAILJS_SERVICE_ID` | ID du service EmailJS |
| `VITE_EMAILJS_TEMPLATE_ID` | ID du template EmailJS |
| `VITE_EMAILJS_PUBLIC_KEY` | Clé publique EmailJS |

Ces variables ne sont jamais commitées (`.env.local` est dans `.gitignore`).

---

## Scripts

```bash
npm run dev       # Serveur de développement (http://localhost:5173)
npm run build     # Build de production dans dist/
npm run preview   # Prévisualiser le build de production
npm run test      # Lancer les tests Vitest
npm run lint      # Vérifier la qualité du code (ESLint)
```

---

## Déploiement

### Vercel

1. Pousser sur GitHub :
```bash
git init && git add . && git commit -m "init: portfolio React v2"
git remote add origin https://github.com/macean20/portfolio-v2
git push -u origin main
```

2. vercel.com → New Project → importer le repo

3. Environment Variables → ajouter les 3 clés VITE_EMAILJS_*

4. Deploy — le `vercel.json` gère les rewrites SPA et les headers de sécurité.

---

## Tests

```bash
npm run test
```

- `ProjectCard.test.jsx` — titre, tags, liens GitHub et détail
- `Navbar.test.jsx` — liens de navigation, toggle hamburger
- `useContactForm.test.js` — validation email, honeypot, champs requis

---

## Ajouter un projet

Éditer `src/data/projects.js` — ajouter un objet dans le tableau `projects` :

```js
{
  id: 'mon-projet',
  icon: '🔧',
  title: 'Mon projet',
  category: 'devops',         // prog | devops | linux | network | docker
  categoryLabel: 'DevOps',
  categoryClass: 'cat-devops',
  description: 'Description courte.',
  tags: [{ label: 'Docker', variant: '' }],
  githubUrl: 'https://github.com/macean20/mon-projet',
}
```

---

## Mettre à jour le CV

Remplacer `public/cv/mon-cv.pdf` par votre nouveau CV (même nom de fichier).

---

## Migration Next.js

Migrer quand : SSR nécessaire, API routes, image optimization automatique.

1. `npx create-next-app@latest portfolio-next --app`
2. Copier `src/data/`, `src/styles/`, `src/components/ui/`
3. Adapter les pages vers la structure `app/`
4. Remplacer `react-router-dom` par les `<Link>` Next.js natifs

---

## Checklist

- [ ] `npm run build` passe sans erreur
- [ ] `npm test` — 10/10 tests verts
- [ ] `npm run lint` — zéro erreur
- [ ] `.env.local` non commité
- [ ] `public/cv/mon-cv.pdf` à jour
- [ ] `public/assets/img/profile.jpeg` présent
- [ ] URLs sociales mises à jour dans `src/data/personal.js`
- [ ] Variables d'env configurées dans Vercel
