// Création du store de redux qui contient le state complet de l'application (les datas). (1 app = 1 store)
// ApplyMiddleware est une extension qui nous permet de dispatch des actions asynchrones assez simplement (via les middlewares)
// compose= on l'utilise afin de pouvoir utiliser plusieurs extentions à la fois
import { createStore, applyMiddleware, compose } from "redux";

// Import des reducers, ce sont des fonctions qui prennent un state et une action en arguments, et qui retournent le state suivant (data misent à jour selon l'action qui déclenche)
import reducer from "src/reducers";

// imports middlewares
// On s'en sert pour communiquer avec le back deploy sur Heroku. Selon l'action demandée, cela nous permet de mettre à jours notre state avec des datas sur BDD,
// ou de mettre La BDD à jour avec des datas de notre state
import userMiddlewares from "../middlewares/user";
import betsMiddlewares from "../middlewares/bets";
import adminMiddlewares from "../middlewares/admin";

// REDUX DEV TOOLS est pour notre extention Redux de navigateur, pour que nous puissions effectuer des tests en direct (consulter le state, les actions déclenchées, entre autres)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Un enhancer Permet de d'ajouter des capacités personnalisées à Redux
const enhancers = composeEnhancers(
  applyMiddleware(userMiddlewares, betsMiddlewares, adminMiddlewares)
);

// On branche le tout
const store = createStore(reducer, enhancers);

export default store;
