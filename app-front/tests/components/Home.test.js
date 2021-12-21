// pour l'exécution des composants on va passer par une écriture JSX
import React from 'react';
import { expect } from 'chai';
// va nous permettre d'isoler notre composant et de le tester
import { shallow } from 'enzyme';

// import du composant à tester
// import Home from 'src/components/Home';

// describe('Home Component', () => {
//   const wrapper = shallow(<Home />);

//   it('should have a className content', () => {
//     expect(wrapper.hasClass('home')).to.be.true;
//   });
// });

import Team from 'src/components/Team';

describe('<Team />', () => {
  describe('structure', () => {

    const wrapper = shallow(<Team />);

    it('should have a className teamContainer', () => {
      expect(wrapper.hasClass('teamContainer')).to.be.true;
    });
  });
});
