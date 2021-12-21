Inutile de commenter tout le code, l'exemple se trouve sur la partie admin. En partant du store en passant jusqu'à l'interface utlisateur :

Actions utilisateur
--------\/
adminReducer (Pour gérer les actions qui ne requierent pas de communication avec le back ) (là où se trouve la partie state concernant l'admin, celle mise à jour selon l'action de l'user)
-------ou/et
adminMiddleware (pour gérer les actions nécessitant une communication avec le back)  
--------\/
container admin (d'où sont dispatch les données du state pour alimenter le composant)  
--------\/
component admin (où est codé le JSX et les données utilisées pour affichage)
--------\/
sous-composants de admin
--------\/
view (interface Utilisateur)
--------\/
Actions utilisateur (bis repetita)

SCHEMA :
https://res.cloudinary.com/practicaldev/image/fetch/s--m5BdPzhS--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://i.imgur.com/riadAin.gif

REDUX:

https://raw.githubusercontent.com/O-clock-Alumni/fiches-recap/master/react/img/redux.png?token=APZRIMGQFUMQZTPC6AXTFZLALWQ3C
