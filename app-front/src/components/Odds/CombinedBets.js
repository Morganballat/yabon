import React from 'react';
// composant stylisé via semantic-ui
import {
  Card, Rating,
} from 'semantic-ui-react';

import './style.scss';

const cote = 4.19;
const mise = 10+"€";

const CombinedBets = ({}) => (
  <div className="bet_analysis">
    <Card
      header="Victoire d'Everton + Real de Madrid"
      meta={<Rating icon="star" defaultRating={2} maxRating={4} disabled />}
      description={[
        'Everton fait partie de la première moitié du tableau',
        ' forte de sa victoire sur Liverpool je les vois largement prendre l\'ascendant sur Southampton ce soir',
        'Le Real de Madrid joue également ce soir et ne compte par laisser le Real Sociedad revenir dans le haut du tableau',
        'Victoire sans surprise attendue du Real de Madrid',
      ].join('')}
    />
    <Card
      header="Everton + RdM"
      meta={<a><img src="https://upload.wikimedia.org/wikipedia/fr/f/fe/Logo_Betclic_2019.svg" alt="" className="slug_picture" /></a>}
      description={[
        `Cote ${cote} Mise ${mise}`,
      ].join('')}
    />

  </div>
);

export default CombinedBets;
