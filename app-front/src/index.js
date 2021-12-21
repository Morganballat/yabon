// Nous avons utilisé un modèle fournit par Oclock pour initialiser l'architecture du projet. Nous aurions pu utiliser Create React App.

// == Import : npm packages
// contient seulement les fonctionnalité nécessaire pour définir les composants React
import React from "react";
// Il est utilisé avec un renderer de React comme suit
import { render } from "react-dom"; // ce dernier est spécialement utilisé pour le web

// notre site possède plusieurs pages qui sont rendues dynamiquement dans le navigateur
// on navigue mais sans refresh, alors React router se charge de garder l'URL à jour
// L'historique de navigation est donc fonctionel, on peut précédent et suivant
import { BrowserRouter as Router } from "react-router-dom";

// Redux est une extension de React
// Il rend le Redux store dispo pour l'ensemble de l'application
import { Provider } from "react-redux";

// Ce store contient tous les states (data) de l'appli. Le seul moyen de changer un état, est de dispatch une action sur ce dernier
import store from "src/store";

// C'est un package mettant à dispo des éléments visuels préconçus
import "semantic-ui-css/semantic.min.css";

// Ici on trouve le container de notre composant racine App
// dans le container, on attribue aux propriétés {props} les variables et actions correspondantes à celles dont a besoin le composant lié
import App from "src/containers/App";

// == Render
// 1. Élément React racine (celui qui contient l'ensemble de l'app)
//    => crée une structure d'objets imbriqués (DOM virtuel)
const rootReactElement = (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
// 2. La cible du DOM (là où la structure doit prendre vie dans le DOM)
const target = document.getElementById("root");
// 3. Déclenchement du rendu de React (virtuel) => DOM (page web)
render(rootReactElement, target);
