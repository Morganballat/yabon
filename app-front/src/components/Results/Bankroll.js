import React from 'react';
import { Tab } from 'semantic-ui-react';
import { Line } from 'react-chartjs-2';
import PropTypes from 'prop-types';

import './style.scss';

const Bankroll = ({ bets }) => {
  // Graphique via ChartJs mise en place d'un hook temporaire pour stockage de data par semaine
  const labels = ['capital de départ'];
  const gains = [];
  // console.log('bets', bets);

  bets.map((item) => {
    gains.push(Math.round(item.gain));
    labels.push(`Pari sur : ${item.beting_team}, Gain : ${item.gain}`);
  });

  const totalBankroll = [200];

  for (let i = 0 ; i < gains.length + 1; i++) {
    const lastStepBankroll = gains[i] + totalBankroll[i];
    totalBankroll.push(lastStepBankroll);
  };
  // Bank sur la semaine

  const lastSevenLabels = labels.slice((labels.length - 7), labels.length);
  // console.log('lastSevenLabels', lastSevenLabels);
  // console.log(lastSevenLabels);
  const lastStepBets = gains.slice((gains.length - 7), gains.length);
  // console.log('lastStepBets', lastStepBets);

  // -------------------

  const barWeekData = {
    labels: lastSevenLabels,
    datasets: [
      {
        label: 'gains',
        data: lastStepBets,
        borderColor: 'white',
        fill: true,
        backgroundColor: '#279930',
        borderWidth: 2,
      },
    ],
  };
  // Graphique via ChartJs mise en place d'un hook temporaire pour stockage de data par mois
  const barMonthData = {
    labels,
    datasets: [
      {
        label: 'gains',
        data: totalBankroll,
        borderColor: 'white',
        fill: true,
        backgroundColor: '#279930',
        borderWidth: 2,
      },
    ],
  };
    // hook temporaire pour options du graphique
  const barOptions = {
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
        xAxes: [
          {
            display: false,
          },
        ],
      },
      title: {
        display: false,
        text: '',
        fontSize: 25,
      },
      legend: {
        display: false,
        position: 'top',
      },
      responsive: true, // oblige le graphique à respecter le ratio au changement de taille écran
      maintainAspectRatio: true, // Maintien le ratio original ( canvas )
    },
  };
  // onglets des graphiques stockés dans des tableaux
  const panes = [

    // 1e Tab - Affichage au de la bankroll totale suivant données
    {
      menuItem: 'Bankroll',
      render: () => (
        <Tab.Pane
          attached={false}
        >
          <Line
            data={barMonthData}
            options={barOptions.options}
          />
        </Tab.Pane>
      ),
    },
    // 2e Tab - Affichage 7 derniers jours
    // {
    //   menuItem: '7 derniers jours',
    //   render: () => (
    //     <Tab.Pane
    //       attached={false}
    //     >
    //       <Line
    //         data={barWeekData}
    //         options={barOptions.options}
    //       />
    //     </Tab.Pane>
    //   ),
    // },
  ];
  return (
    <div className="bankroll">
      <Tab panes={panes} />
    </div>
  );
};

Bankroll.propTypes = {
  bets: PropTypes.array.isRequired,
};

export default Bankroll;
