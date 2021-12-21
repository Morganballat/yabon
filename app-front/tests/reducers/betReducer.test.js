// on importe ce qu'on veut tester, ici le reducer de recipes
import betReducer, { initialState } from 'src/reducers/betReducer'

// on importe la fonction pour nos assertions
import { expect } from 'chai';

import { GET_BETS } from 'src/actions/bet';

// Mocha met à disposition la fonction describe
// describe permet de faire le chapitrage/sommaire de nos test
// il prend 2 arguments, une string pour décrire le test et un callback
// on peut imbriquer les describe entre eux
describe('Reducer betReducer', () => {
  describe('structure', () => {
    // Mocha fournit la fonction it
    // elle nous permet de lancer les tests
    // les tests peuvent avoir 3 status différents
    // - passed => passé
    // - failed => échoué
    // - pending => en attente
    // Attention : ne pas mettre de fonction vide en 2e argument, le test passe
    it('shouldbe a function', () => {
      expect(betReducer).to.be.a('function');
    });
    // on peut avoir plusieurs assertions pour le même test
    it('shouldbe a function', () => {
      expect(initialState).to.be.an('object');
      // on vérifie que lorsqu'on exécute le reducer, on récupère bien l'initalState
      // ici equal va tester la référence
      expect(betReducer()).to.be.equal(initialState);
    });
  });
});
