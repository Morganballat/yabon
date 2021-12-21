// Ici nous avant le composant Admin. Par convention il est nommé index.js. Dans le meme dossier nous pouvons voir d'autres fichiers qui sont des sous composants
// Il servent à séparer le code proprement, à chacun son boulot

// useEffect permet de bénéficer d'un état local. d'éxecuter des effets de bord dans les composants. Il Déclenche au chargement du composant les fonctions
// demandées, permet de dire que le composant doit afficher qqch les données récupérées
import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
// Proptypes = utilitaire de code, pour aider le développpeur cerner certaines erreurs rapidos
import PropTypes from "prop-types";

// Import d'un sous compoant
import DropdownBets from "./Dropdown";
// Style CSS
import "./style.scss";

// Composant
// en paramètre on récupère les propriétés {props} depuis le container Admin
// Cec props peuvent être transmises aux sous composants
const Admin = ({
  changeField,
  getApiBets,
  apiMatches,
  setMatchId,
  match,
  admin,
  setSelectedMatchOdd,
  setSelectedBetingTeam,
  submitBet,
}) =>
  // LOGIQUE JS { }
  {
    useEffect(() => {
      // On demande à récupérer la donnée
      // Pour ca je dois donc déclencher une intention de récupération de données
      getApiBets();
    }, []);
    // console.log('on est dans admin');
    let selectedMatchValue;
    let selectedMatchOdd;

    // On peut return directement un composant en utilisant ( ) directement après sa déclaration, mais on peut insérer de la logique JS en
    // insérant un { } avant de return( )
    redirectFalse;

    const handleMatch = (event) => {
      // event.preventDefault();
      selectedMatchValue = document.querySelector(".selected");
      console.log(selectedMatchValue);
      for (let i = 0; i < apiMatches.length; i++) {
        if (
          `${apiMatches[i].host_team} - ${apiMatches[i].visitor}` ===
          selectedMatchValue.textContent
        ) {
          // l'id du match selectionné pars dans le state
          const match_id = apiMatches[i].id;
          setMatchId(apiMatches[i], match_id);
          console.log(apiMatches[i].id);
        }
      }
    };

    const handleChange = (event) => {
      changeField(event.target.value, event.target.name);
    };

    const handleSelectChange = () => {
      const selectValue = document.querySelector(".beting_team").value;
      console.log(selectValue);
      if (match.host_team === selectValue) {
        selectedMatchOdd = match.odds_1;
      } else if (match.visitor === selectValue) {
        selectedMatchOdd = match.odds_2;
      } else {
        selectedMatchOdd = match.odds_draw;
      }
      setSelectedMatchOdd(selectedMatchOdd);
      if (selectValue) {
        setSelectedBetingTeam(selectValue);
      }
    };

    const handleSubmitBet = (event) => {
      event.preventDefault();
      submitBet();
    };

    if (admin.redirectToOdds) {
      return <Redirect to="/odds" />;
    }

    // Le langage utilisé dans les return de composant est appelé JSX
    // Ca ressemble à du HTML
    if (admin.redirectTo) {
      return <Redirect to="/odds" />;
    }

    // -------- RETURN( )
    return (
      // Les props sont passés aux élément qui en ont besoin
      <form className="admin_form" onSubmit={handleSubmitBet}>
        <h3 className="admin_title">Formulaire d'ajout de Bet</h3>
        {/* Ici on passe le sous composant */}
        <DropdownBets apiMatches={apiMatches} handleMatch={handleMatch} />
        <div className="admin_form-selections">
          <select
            name="beting_team"
            className="beting_team"
            onChange={handleSelectChange}
          >
            <option name="beting_team" value={match.host_team}>
              {match.host_team}
            </option>
            <option name="beting_team" value="Draw">
              Draw
            </option>
            <option name="beting_team" value={match.visitor}>
              {match.visitor}
            </option>
          </select>
        </div>
        <div className="admin_form-inputs">
          <div className="admin_form-betCalculate">
            <input
              className="admin_input"
              type="number"
              name="mise"
              placeholder="Mise"
              value={admin.mise}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <input
              className="admin_input"
              type="number"
              name="bet_odds"
              placeholder="Cote"
              value={admin.bet_odds}
              readOnly
            />
          </div>
          <div>
            <input
              className="admin_input"
              type="number"
              name="gain"
              placeholder="gain"
              value={admin.mise * admin.bet_odds}
              onChange={handleChange}
              readOnly
            />
          </div>

          <div>
            <textarea
              className="analysis"
              type="text"
              name="comment"
              placeholder="Analyse"
              value={admin.comment}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <input
              className="admin_input"
              type="number"
              name="trust"
              placeholder="Confiance"
              value={admin.trust}
              onChange={handleChange}
              max="5"
              required
            />
          </div>
          <button className="admin_submit" type="submit">
            Ajouter mon Bet
          </button>
        </div>
      </form>
    );
  };

Admin.propTypes = {
  changeField: PropTypes.func.isRequired,
  getApiBets: PropTypes.func.isRequired,
  apiMatches: PropTypes.array.isRequired,
  setMatchId: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  admin: PropTypes.object.isRequired,
  setSelectedMatchOdd: PropTypes.func.isRequired,
  setSelectedBetingTeam: PropTypes.func.isRequired,
  submitBet: PropTypes.func.isRequired,
};

// L'export pour être importé dans le container lié

export default Admin;
