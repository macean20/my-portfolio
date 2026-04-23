# 🚀 Portfolio DevOps — Votre Nom

Portfolio professionnel généré automatiquement.

## 📁 Structure
```
portfolio/
├── index.html                  # Site principal (toutes sections)
├── assets/css/style.css        # Styles globaux
├── assets/js/script.js         # JavaScript interactif
├── assets/img/profile.jpg      # ← AJOUTEZ VOTRE PHOTO ICI
├── cv/mon-cv.pdf               # ← AJOUTEZ VOTRE CV ICI
├── projects/                   # Pages détail projets
└── .github/workflows/          # CI/CD GitHub Pages
```

## ⚡ Démarrage rapide
```bash
# Prévisualisation locale
npx serve . -p 3000
# ou
python3 -m http.server 3000
```

## 🌐 Déploiement GitHub Pages
1. `git init && git add . && git commit -m "init: portfolio"`
2. Créez le repo GitHub : `votre-nom.github.io`
3. `git remote add origin https://github.com/VOTRE_USER/votre-nom.github.io`
4. `git push -u origin main`
5. Settings → Pages → Branch: main → Save
6. Site live : **https://VOTRE_USER.github.io**

## ✏️ Personnalisation
- **Photo** : Remplacez `assets/img/profile.jpg`
- **CV** : Ajoutez `cv/mon-cv.pdf`
- **Contact form** : Inscrivez-vous sur [formspree.io](https://formspree.io) et remplacez l'ID dans index.html
- **Infos** : Editez les variables en haut de `generate-portfolio.sh`
