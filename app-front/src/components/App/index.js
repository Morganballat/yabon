// LE composant à la base de l'application

// == Import npm/yarn
import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

<<<<<<< HEAD
// == Import composants et containers (un container rend un composant intelligent, il est lié au state)
import Header from "src/containers/Header";
import Footer from "src/components/Footer";
import Home from "src/containers/Home";
import Results from "src/containers/Results";
import Register from "src/containers/Register";
import Login from "src/containers/Login";
import Odds from "src/containers/Odds";
import Errors from "src/components/Errors";
import Team from "/src/components/Team";
import Admin from "src/containers/Admin";
import AdminResolve from "src/containers/AdminResolve";
import Profile from "src/containers/Profile";
import Loading from "./Loading";
=======
// == Import composants
import Moderator from 'src/containers/Moderator';
import Header from 'src/containers/Header';
import Footer from 'src/components/Footer';
import Home from 'src/containers/Home';
import Results from 'src/containers/Results';
import Register from 'src/containers/Register';
import Login from 'src/containers/Login';
import Odds from 'src/containers/Odds';
import PageError from 'src/components/PageError';
import ErrorAdmin from 'src/components/ErrorAdmin';
import Team from '/src/components/Team';
import Admin from 'src/containers/Admin';
import AdminResolve from 'src/containers/AdminResolve';
import Profile from 'src/containers/Profile';
import Loader from './Loader';
>>>>>>> dev

// == Import de style
import "./style.scss";

// == Composant
const App = ({ getBets, getBestBet, isLogged, admin, }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // On demande à récupérer la donnée
    // Pour ca je dois donc déclencher une intention de récupération de données
    document.title = 'Yabon Prono';
    // getBets();
    // getBestBet();
    setTimeout(() => (setLoading(false)), 3000);
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/results" exact>
          <Results />
        </Route>
        <Route path="/login" exact>
          {!isLogged ? <Login title="Connexion" /> : <Redirect to="/" exact />}
        </Route>
        {/* ------- */}
        <Route exact path="/odds">
          {!isLogged ? <Redirect to="/register" exact /> : <Odds />}
        </Route>
        {/* ------- */}
        <Route path="/register" exact>
          <Register title="Inscription" />
        </Route>
        {/* ------- */}
        <Route path="/profile" exact>
          {!isLogged ? <Redirect to="/register" exact /> : <Profile />}
        </Route>
        {/* ------- */}
        <Route path="/team" exact>
          <Team />
        </Route>
        <Route path="/admin" exact>
          {!admin ? <Redirect to="/403" exact /> : <Admin />}
        </Route>
        <Route path="/adminResolve" exact>
          {!admin ? <Redirect to="/403" exact /> : <AdminResolve />}
        </Route>
        <Route path="/moderator" exact>
          {!admin ? <Redirect to="/" exact /> : <Moderator />}
        </Route>
        <Route path="/logout" exact>
          <Redirect to="/" />
        </Route>
        <Route path="/403" exact>
          <ErrorAdmin />
        </Route>
        <Route path="/404" exact>
          <PageError />
        </Route>
        <Route path="/profile" exact>
          <Profile />
        </Route>
        <Route>
          <PageError />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
  
};

App.propTypes = {
  getBets: PropTypes.func.isRequired,
  isLogged: PropTypes.bool,
  admin: PropTypes.bool,
  getBestBet: PropTypes.func.isRequired,
};

App.defaultProps = {
  admin: false,
  isLogged: false,
};

// == Export
export default App;
