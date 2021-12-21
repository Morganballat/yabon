# projet-yabon-prono

Règle Git

Rappelle des principale commande:

`git status ` : Affiche la liste des fichiers modifiés ainsi que les fichiers qui doivent encore être ajoutés ou validés

`git add ` : utilisée pour ajouter des fichiers à l’index

`git commit -m”” `: Valide les modifications apportées au HEAD.

`git push `: Envoie les modifications locales à la branche associée

`git checkout -b <nom-branche> ` : Crée une branche

`git branch <nom-branche> ` : Autre méthode pour créer une branche

`git checkout <nom-branche> ` : Change de branche

`git branch ` : List les branche

`git branch -d <nom-branche> ` : Supprime une branche

`git pull ` : fusionne toutes les modifications présentes sur le dépôt distant dans le répertoire de travail local

`git merge <nom-branche> ` : Fusionne une branche dans la branche active Commande réservée au git master

`git diff --base <nom-fichier> ` : Permet de lister les conflits

`git diff <branche-source> <branche-cible> ` : Affiche les conflits entre les branches à fusionner avant de les fusionner Commande réservée au git master

`git diff ` : Permet de lister les conflits actuels

`git stash` : Retour au précédents commit Commande dangereuse

`git rebase master ` : Réapplication des commits sur une autre branche Commande réservée au git master
