# Rapport d'optimisation du projet Scrollytelling

[PageSpeed Insights-Rapport du 9 Mai 2023, 1:53:52 PM](https://pagespeed.web.dev/analysis/https-alexisbolduc1-github-io-Alexis_Bolduc-scrollytelling/9zvemma2ry?form_factor=desktop)

## Problème #1
### Servir des actifs statiques avec une politique de cache efficace
Mettre en cache HTTP permet d'accélérer le temps de chargement de la page lors de visites répétés.
### Actions concrète pour résoudre le problème
Il faut venir indiquer le cache-control comme variable.
Ex: Cache-Control: max-age=31536000
Le max-age vient indiquer au naviguateur combien de temps (en secondes) il doit mettre en cache la ressource.
### Résultat
J'ai essayer de rajouter le cache-control dans le head du html.

## Problème #2
### Assurez-vous que le texte reste visible pendant le chargement de la police Web
Lorsque la police du texte est en train de charger, il faut tout de même que le texte soit affiché
### Actions concrète pour résoudre le problème
Il faut ajouter aux font-face la fonction : font-display: swap;. 
Swap vient indiquer au naviguateur que le texte qui utilise la police doit être affiché immédiatement en utilisant une police par défaut, puis lorsque la police est charger, elle remplace la police par défaut.
### Résultat
J'ai ajouter le font-display:swap; au 3 font-face de mon css.

## Problème #3
### Éviter les énormes charges utiles du réseau
Beaucoup d'images et de polices prennent beaucoup de temps à charger et il est possible de réduire la taille de ses images afin d'optimiser le site web.
### Actions concrète pour résoudre le problème
Minimiser les images et les fichiers afficher sur le site web.
### Résultat
J'ai réduit la taille des images qui s'affichent sur le site web.
