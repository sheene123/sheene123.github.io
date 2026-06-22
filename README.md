# Portfolio — Carld Similien

Portfolio professionnel multi-pages, design **Data Terminal** (dark/light mode).

**Stack** : Next.js 14 (App Router) · Tailwind CSS · Framer Motion · export statique.

## Arborescence

```
carld-portfolio/
├── app/
│   ├── layout.jsx              # Layout global (nav, footer, SEO, thème)
│   ├── globals.css             # Thèmes dark/light (variables CSS)
│   ├── page.jsx                # Accueil : hero + photo, à propos, compétences, projets
│   ├── experience/page.jsx     # Timeline interactive (accordéons) + formation
│   ├── projets/page.jsx        # Projets filtrables par catégorie (IA/Web/Cloud)
│   ├── projets/[slug]/page.jsx # Étude de cas par projet
│   ├── cv/page.jsx             # CV intégré + téléchargement PDF
│   └── contact/page.jsx        # Contact façon terminal + copie email
├── components/                 # Nav, Footer, ThemeToggle, Reveal (animations)
├── lib/data.js                 # ⭐ TOUT le contenu est ici (projets, expériences…)
├── public/
│   ├── profile.jpg             # Photo de profil
│   └── cv.pdf                  # CV téléchargeable
└── .github/workflows/deploy.yml # Déploiement auto GitHub Pages
```

## Lancer en local

Prérequis : [Node.js 18+](https://nodejs.org)

```bash
cd carld-portfolio
npm install
npm run dev
```

→ http://localhost:3000

## Déployer sur GitHub Pages (automatique)

1. Crée un repo sur GitHub (ex. `portfolio`)
2. Pousse le projet :
   ```bash
   git init
   git add .
   git commit -m "Portfolio initial"
   git branch -M main
   git remote add origin https://github.com/TON_PSEUDO/portfolio.git
   git push -u origin main
   ```
3. Sur GitHub : **Settings → Pages → Source : GitHub Actions**
4. Le workflow `deploy.yml` build et déploie automatiquement à chaque push.
   Le site sera sur `https://TON_PSEUDO.github.io/portfolio/`

> Le workflow utilise `actions/configure-pages` qui injecte automatiquement le `basePath` — rien à configurer.

## Personnaliser

- **Contenu** (projets, expériences, compétences, à-propos) : tout est dans `lib/data.js`
- **Liens GitHub / LinkedIn** : champs `github` et `linkedin` dans `lib/data.js` (actuellement génériques — aucun lien trouvé lors du scan)
- **CV** : remplace `public/cv.pdf`
- **Photo** : remplace `public/profile.jpg`
- **Couleurs / thèmes** : variables CSS dans `app/globals.css`

## Optimisations incluses

- SEO : metadata, Open Graph, lang fr, titres par page
- Accessibilité : aria-labels, contrastes, navigation clavier
- Responsive : mobile-first, menu burger
- Performance : export statique, polices préchargées, animations GPU
