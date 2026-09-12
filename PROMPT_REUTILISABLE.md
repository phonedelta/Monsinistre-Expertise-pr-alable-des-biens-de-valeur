# Prompt réutilisable — Landing page type Monsinistre

Copie ce prompt pour générer un **nouveau projet identique en architecture et en design**.  
Change uniquement : **textes métier**, **images**, **nom de marque**, **liens sociaux**.

**Ne change pas les couleurs** de la landing page : conserver la palette / les tokens du projet de référence.

---

## PROMPT À COPIER

```text
# OBJECTIF

Créer une landing page one-page moderne, premium, responsive, entièrement en français,
en reprenant EXACTEMENT l’architecture, la structure UX et le design (y compris les couleurs)
du projet de référence décrit ci-dessous.

Je veux changer UNIQUEMENT :
- les textes métier
- les images
- le nom de la marque
- les liens réseaux sociaux

NE PAS changer :
- les couleurs / la palette / les tokens CSS
- l’architecture des fichiers
- la stack technique
- l’ordre des sections
- les patterns UI (Hero, cards, formulaire, barre CTA fixe, back-to-top)
- le comportement des CTA (scroll vers le formulaire)
- la typographie de base (Inter + Manrope)
- les formes (rounded-full, cards, badges)

IMPORTANT :
Reproduire les mêmes couleurs que le projet de référence.
Ne pas inventer une nouvelle palette.
Ne pas “rebrandir” les couleurs.

Utiliser UI UX Pro Max pour harmoniser layout, contraste, responsive et densités
SANS modifier la palette.

==================================================
1. STACK TECHNIQUE (OBLIGATOIRE)
==================================================

- React 19
- Vite
- Tailwind CSS 4 (@tailwindcss/vite)
- Lucide React (icônes)
- CSS custom + variables CSS (design tokens)
- oxlint (lint)
- Langue UI / contenu : français uniquement

Scripts :
- npm run dev
- npm run build
- npm run lint
- npm run preview

Pas de backend.
Pas de fausse API.
Validation formulaire côté client uniquement.

==================================================
2. ARCHITECTURE DU PROJET
==================================================

Créer cette structure :

/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   ├── favicon.png
│   ├── logo.png
│   └── images/
│       ├── hero.(jpg|png)
│       ├── expertise.(jpg|png)
│       ├── why.(jpg|png)
│       ├── jewelry.(jpg|png)      # ou équivalent 4 assets
│       ├── painting.(jpg|png)
│       ├── art.(jpg|png)
│       ├── objects.(jpg|png)
│       └── problematique/
│           ├── 1.png
│           ├── 2.png
│           ├── 3.png
│           └── 4.png
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── data/
    │   └── landingContent.js      # TOUT le contenu texte + images + options formulaire
    └── components/
        ├── LandingSections.jsx    # Hero + toutes les sections marketing
        ├── ExpertiseForm.jsx      # Formulaire final (#expertise-form)
        ├── FixedCtaBar.jsx        # Barre CTA fixe bas d’écran
        ├── BackToTop.jsx          # Bouton retour haut
        └── Reveal.jsx             # Animation fade/slide au scroll

Règle importante :
- Centraliser textes, listes, options formulaire et chemins d’images dans landingContent.js
- Les composants ne doivent pas contenir de longues chaînes métier en dur si possible

==================================================
3. STRUCTURE DE LA LANDING (ORDRE FIXE)
==================================================

AUCUN Header / Navbar.
AUCUN Footer classique.

Ordre des sections dans App.jsx :

1. HeroSection                 (#accueil)
2. ProblemSection              (#problematique)
3. ExpertiseSection            (#expertise-prealable)
4. AssetsSection               (#biens-concernes)
5. BenefitsSection             (#benefices)
6. AudienceSection             (#profils)
7. ProcessSection              (#processus)
8. WhySection                  (#pourquoi-xxx)
9. ExpertiseForm               (#expertise-form)

Puis hors flux principal :
- FixedCtaBar (fixed bottom)
- BackToTop (fixed, au-dessus de la barre)

Ajouter padding-bottom sur <main> pour que la barre fixe ne masque pas le formulaire.

==================================================
4. DÉTAIL DES SECTIONS
==================================================

### A. HERO (#accueil)
Layout desktop : 2 colonnes (texte gauche / image droite).
Mobile : stack vertical, texte puis image.

Contient :
- badge pill (eyebrow)
- H1
- sous-titre / lead
- CTA principal → scroll vers #expertise-form
- image dominante (carrée ou ratio fort, object-fit cover)
- 2 mini cards flottantes (desktop) : icône + court texte

### B. PROBLÉMATIQUE (#problematique)
- intro centrée (eyebrow + titre + sous-titre)
- grille 4 cards (1 col mobile / 2 tablette / 4 desktop)
- chaque card :
  - image en haut
  - corps : icône + titre sur la même ligne
  - description
- images : /images/problematique/1.png → 4.png

### C. EXPERTISE (#expertise-prealable)
- layout 2 colonnes : image | texte
- eyebrow + titre + sous-titre
- 2 mini points (blocs texte)
- CTA → #expertise-form

### D. BIENS CONCERNÉS (#biens-concernes)
- intro centrée
- grille 4 cards image + icône + titre + texte
- images assets (jewelry/painting/art/objects ou équivalents)

### E. BÉNÉFICES (#benefices)
- titre + CTA
- grille 4 cards (icône + titre + lead + texte)

### F. PROFILS (#profils)
- intro
- grille cards audience (icône + titre + texte)
- CTA

### G. PROCESSUS (#processus)
- intro
- 4 étapes en grille
- ligne timeline discrète sur desktop
- chaque step : icône + titre + texte

### H. POURQUOI [MARQUE] (#pourquoi-xxx)
- layout 2 colonnes : texte+image | cards raisons
- CTA

### I. FORMULAIRE (#expertise-form)
Formulaire multi-blocs :
1. Coordonnées : nom, téléphone/WhatsApp, ville
2. Biens : types (multi), nombre, localisation
3. Besoin : motivation, documents (optionnel), délai

Comportement :
- validation FR côté client
- messages d’erreur clairs
- choice cards (radio/checkbox) style pill/card
- bouton submit = même style que CTA principal
- pas de faux backend : message succès local ou état “demande prête”

==================================================
5. BARRE CTA FIXE (OBLIGATOIRE)
==================================================

Position : fixed bottom-0 left-0 right-0
Background : blanc / 95% + backdrop-blur
Border-top légère + soft shadow vers le haut

Desktop (3 zones) :
- GAUCHE : 3 icônes sociales circulaires (Instagram, Facebook, LinkedIn)
- CENTRE : titre court + sous-texte
- DROITE : bouton CTA → #expertise-form

Mobile :
- icônes centrées
- bouton pleine largeur
- texte central masqué ou réduit pour rester compact

Hauteur compacte (~64–84px desktop).

Utiliser les couleurs EXISTANTES du design system (pas de nouvelles couleurs).

==================================================
6. BACK TO TOP
==================================================

- bouton rond fixed
- flèche ArrowUp (Lucide)
- apparaît après ~400px de scroll
- positionné bas-droite, AU-DESSUS de la barre CTA
- scroll smooth vers #accueil
- couleur = primary existante

==================================================
7. DESIGN SYSTEM (À REPRODUIRE, PAS À RÉINVENTER)
==================================================

### Typographie
- Corps : Inter
- Titres : Manrope, font-weight 700–800

### Formes
- cards : border-radius ~1.25rem
- boutons : rounded-full
- badges : pill / capsule
- social icons : rounded-full

### Composants UI récurrents
- .section-eyebrow (badge)
- .section-title / .section-lead
- .primary-cta (bouton principal)
- .ui-card (cards)
- .icon-box (fond doux + icône)
- .media-frame (images sections)
- Reveal (fade-up au scroll)

### Comportements
- hover cards : légère élévation + border accent
- hover CTA : légère variation (token hover existant)
- smooth scroll
- responsive breakpoints : 640 / 768 / 1024 / 1280
- overflow-x: hidden
- safe-area insets pour mobile

==================================================
8. COULEURS — NE PAS MODIFIER
==================================================

Conserver EXACTEMENT la palette / les tokens du projet de référence.

NE PAS :
- changer --primary / --bg / --text / etc.
- inventer une nouvelle charte
- remplacer le turquoise/vert d’eau par une autre famille de couleurs

Si le projet est cloné depuis Monsinistre :
garder les tokens déjà présents dans index.css (:root / @theme).

Les seuls changements autorisés concernent le contenu et les médias,
pas le style couleur.

==================================================
9. CONTENU À PERSONNALISER (landingContent.js)
==================================================

Remplacer :
- nom de marque
- titres / sous-titres de chaque section
- textes des cards (problems, assets, benefits, audiences, process, reasons)
- labels CTA
- options du formulaire
- alt images
- chemins images
- URLs sociales (Instagram / Facebook / LinkedIn)
- title HTML / meta description

Ne pas inventer :
- faux témoignages
- fausses stats
- faux contacts
- fausse newsletter

==================================================
10. IMAGES À FOURNIR
==================================================

Remplacer les fichiers dans public/images/ en gardant les mêmes rôles :

- hero
- expertise
- why
- 4 assets (catégories)
- 4 images problematique (1→4)

Formats : JPG ou PNG
Résolution recommandée : ~1536×1024 ou proche
Chemins ASCII sans accents (ex: /images/problematique/)

==================================================
11. CTA / NAVIGATION
==================================================

Tous les CTA principaux pointent vers #expertise-form
(scroll smooth).

Pas de navbar.
Pas de footer multi-colonnes.

==================================================
12. RESPONSIVE
==================================================

Tester :
320, 375, 390, 768, 1024, 1280, 1440

Vérifier :
- Hero above the fold raisonnable
- grilles cards
- formulaire
- barre fixe non invasive
- back-to-top non chevauchant
- aucun overflow horizontal
- couleurs inchangées vs référence

==================================================
13. LIVRABLE
==================================================

1. Initialiser Vite React + Tailwind dans le dossier
2. Reproduire l’architecture ci-dessus
3. Reprendre le design system et les couleurs du projet de référence
4. Brancher le contenu depuis landingContent.js
5. Intégrer MES images
6. Remplacer MES textes
7. npm run build doit passer

À la fin, indiquer :
- fichiers créés
- confirmation que les couleurs n’ont pas été modifiées
- id du formulaire
- comment changer texte / images en 3 minutes (sans toucher aux couleurs)
```

---

## COMMENT UTILISER CE PROMPT

1. Copie le bloc `PROMPT À COPIER`.
2. Remplace la section **9** par tes textes (ou joins un brief métier).
3. Place tes images dans `public/images/` avec les mêmes rôles.
4. Lance la génération du projet.
5. **Ne fournis pas de nouvelle palette** : les couleurs restent celles de la référence.

## CHANGEMENTS RAPIDES SUR UN PROJET EXISTANT

| Élément | Fichier |
| --- | --- |
| Textes / options formulaire / chemins images | `src/data/landingContent.js` |
| Images | `public/images/` |
| Logo / favicon | `public/logo.png`, `public/favicon.png` |
| Ordre des sections | `src/App.jsx` |
| Barre fixe + réseaux | `src/components/FixedCtaBar.jsx` |
| Formulaire | `src/components/ExpertiseForm.jsx` |

> Les couleurs (`src/index.css` tokens) ne doivent **pas** être modifiées.
