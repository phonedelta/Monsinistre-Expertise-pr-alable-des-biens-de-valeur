# Prompt — Modifications Monsinistre (depuis suppression Navbar/Footer)

Utilise ce prompt pour **reproduire ou appliquer** sur une landing page similaire les modifications structurelles/UX faites aujourd’hui, **sans changer la palette de couleurs**.

---

## PROMPT À COPIER

```text
# OBJECTIF

Appliquer sur une landing page existante (React + Vite + Tailwind CSS) l’ensemble des
modifications suivantes, déjà validées sur le projet Monsinistre — Expertise préalable.

Ces changements vont de la suppression du Header/Footer jusqu’à l’état final actuel.
Ne refais pas toute la landing depuis zéro si elle existe déjà : applique ces évolutions
dans l’ordre logique.

IMPORTANT :
NE PAS modifier la palette de couleurs existante du projet cible.
Conserver les couleurs, tokens CSS et styles de boutons/badges/cards déjà en place.
Cette tâche concerne la structure, le chrome UI, le contenu images, la typographie des titres
et la barre CTA — pas un rebranding couleur.

Stack à conserver :
- React
- Vite
- Tailwind CSS 4
- Lucide React
- CSS variables / design tokens existants
- Contenu centralisé (ex: landingContent.js)

==================================================
1. SUPPRIMER HEADER / NAVBAR
==================================================

Supprimer complètement :
- logo navbar
- liens de navigation
- CTA navbar
- header sticky
- menu hamburger mobile
- tous les composants Header/SiteHeader

Conséquences :
- la page commence directement par le Hero
- supprimer paddings/margins/scroll-margin liés à une navbar
- Hero sans offset type calc(100svh - hauteur-navbar)

==================================================
2. SUPPRIMER FOOTER
==================================================

Supprimer complètement :
- Footer multi-colonnes
- logo footer
- Navigation / Actions / Contact footer
- réseaux sociaux du footer
- copyright
- crédit Think Group
- styles CSS associés

La landing se termine par le formulaire + barre CTA fixe.

==================================================
3. SUPPRIMER BACK-TO-TOP ANCIEN (TEMPORAIREMENT)
==================================================

Au moment de la refonte chrome, l’ancien back-to-top a été retiré avec le footer.
Il sera réintroduit plus tard (voir section 8), repositionné au-dessus de la barre fixe.

==================================================
4. CRÉER LA BARRE CTA FIXE (PREMIÈRE VERSION)
==================================================

Ajouter FixedCtaBar :
- fixed bottom-0 left-0 right-0
- bg blanc/95 + backdrop-blur
- border-top légère (couleur border existante du projet)
- soft shadow vers le haut
- bouton "Demander une expertise" → #expertise-form
- conserver EXACTEMENT le style du bouton primary CTA déjà présent
- padding-bottom sur <main> pour ne pas masquer le formulaire

Première version : bouton seul (à droite / centré).

==================================================
5. AMÉLIORER LA BARRE — TEXTE + BOUTON
==================================================

Desktop :
GAUCHE : texte
- Titre : "Besoin d’une expertise ?"
- Sous-texte : description courte
DROITE : bouton existant

Mobile :
- titre court éventuel
- bouton pleine largeur
- pas de sous-texte trop long

==================================================
6. AMÉLIORER LA BARRE — 3 ZONES + SOCIAL
==================================================

Desktop en 3 zones horizontales :

GAUCHE : Instagram / Facebook / LinkedIn
- boutons ronds
- style cohérent avec le thème existant (border / icon / hover)
- ne pas inventer une nouvelle palette

CENTRE : texte CTA
- "Besoin d’une expertise ?"
- "Décrivez-nous vos biens et accédez directement au formulaire."
- text-center

DROITE : bouton "Demander une expertise"
- CONSERVER exactement le style primary-cta existant
- lien vers #expertise-form

URLs sociales (si disponibles dans le projet) :
- https://www.instagram.com/monsinistrema/
- https://www.facebook.com/monsinistrema/
- https://www.linkedin.com/company/monsinistre/

Sinon : réutiliser les URLs déjà présentes, sans inventer.

Mobile :
- ligne 1 : social icons centrées
- ligne 2 : bouton pleine largeur
- texte central masqué pour compacité

==================================================
7. RÉDUIRE LA TAILLE DE LA BARRE
==================================================

Rendre la barre plus compacte :
- hauteur desktop ~64–76px
- icônes plus petites (~2.15–2.25rem)
- titres/sous-textes plus petits
- paddings/gaps réduits
- bouton de la barre légèrement plus compact (scoped) si nécessaire
- ajuster padding-bottom de la page

==================================================
8. RÉINTRODUIRE BACK TO TOP
==================================================

Ajouter un bouton retour en haut :
- rond
- utiliser la couleur primary EXISTANTE du projet
- ArrowUp
- fixed bas-droite
- AU-DESSUS de la barre CTA (bottom = hauteur barre + offset)
- visible après ~400px de scroll
- scroll smooth vers #accueil / top

==================================================
9. AJOUTER 4 IMAGES AUX CARDS PROBLÉMATIQUE
==================================================

Dans la section #problematique :
- chaque card reçoit une image en haut
- images : /images/problematique/1.png → 4.png (ordre des cards)
- dossier ASCII sans accents : public/images/problematique/
- conserver icône + titre + texte sous l’image
- style proche des asset cards (image cover, ratio ~4/3, hover léger)

Ordre :
1. Une valeur mal connue
2. Une couverture plafonnée
3. Des biens difficiles à valoriser
4. Le problème découvert trop tard

==================================================
10. ALIGNER ICONE + TITRE DES CARDS PROBLÉMATIQUE
==================================================

Dans le corps des cards problematique :
- supprimer l’espace vide / ressenti “vide” devant l’icône
- placer icône et titre sur la MÊME ligne (flex, align-items center, gap)
- padding du corps de card plus serré et cohérent
- description en dessous

==================================================
11. CHANGER LA FONT DES TITRES + PLUS GRAS
==================================================

- Titres : police Manrope (display)
- Corps : Inter
- Titres (hero, sections, cards) : font-weight 800
- Importer Manrope via Google Fonts
- Mettre à jour --font-display

Ne pas modifier les couleurs à cette étape.

==================================================
12. DOCUMENTATION / PROMPT RÉUTILISABLE
==================================================

Générer un fichier PROMPT_REUTILISABLE.md qui décrit :
- architecture
- stack
- structure des sections
- design tokens
- comment cloner le projet en changeant seulement couleurs / textes / images

==================================================
13. CE QU’IL NE FAUT PAS CASSER
==================================================

- palette / tokens couleurs existants
- contenu métier fidèle (pas d’invention)
- structure des sections marketing
- formulaire existant et son id #expertise-form
- images hero/expertise/why/assets déjà en place
- React + Tailwind
- responsive
- style du bouton primary CTA

==================================================
14. CHECKLIST FINALE
==================================================

[ ] Header/Navbar supprimés
[ ] Footer supprimé
[ ] Hero en haut sans espace fantôme
[ ] Aucun changement de palette couleurs
[ ] Barre CTA fixe présente
[ ] Social icons dans la barre
[ ] Texte central + bouton dans la barre
[ ] Barre compacte
[ ] Bouton barre → #expertise-form
[ ] Bouton primary inchangé visuellement
[ ] Back-to-top au-dessus de la barre
[ ] 4 images problematique intégrées
[ ] Icone + titre alignés horizontalement
[ ] Titres en Manrope gras
[ ] Build OK
[ ] Push GitHub si demandé

==================================================
15. RÉSULTAT ATTENDU
==================================================

Une landing page sans navbar ni footer,
avec Hero immédiat, sections inchangées en structure,
formulaire en fin de page, barre CTA fixe enrichie (social + texte + bouton),
bouton retour haut, cards problematique illustrées, titres Manrope bold,
et couleurs du projet conservées.
```

---

## Résumé chronologique des demandes (aujourd’hui)

1. Supprimer Navbar + Footer + barre CTA fixe  
2. Remplir la barre (texte + bouton)  
3. Barre 3 zones (social + texte + bouton)  
4. Réduire la taille de la barre  
5. Ajouter bouton retour en haut  
6. Push GitHub  
7. Ajouter 4 photos aux cards Problématique  
8. Aligner icône + titre (plus d’espace vide)  
9. Autre font titres + plus gras (Manrope)  
10. Prompt réutilisable du projet  
11. Push GitHub final  

> Note : la refonte palette turquoise est volontairement exclue de ce prompt.

Fichier miroir du projet de référence : `PROMPT_REUTILISABLE.md`
