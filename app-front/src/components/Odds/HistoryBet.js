import React from 'react';
import PropTypes from 'prop-types';

import {
  Table,
} from 'semantic-ui-react';

import './style.scss';

const HistoryBet = ({ bets }) => {
  // console.log('je suis dans historybet', bets);
  let betstatus = null;
  const historyBets = bets.map((item) => {
    if (item.gain > 0) {
      betstatus = 'positive';
      // console.log({ betstatus });
    }
    else {
      betstatus = 'negative';
    }
    return (
      <Table.Row negative key={item.cote}>
        <Table.Cell>{item.beting_team}</Table.Cell>
        <Table.Cell>{item.cote}</Table.Cell>
        <Table.Cell>{item.mise}</Table.Cell>
        <Table.Cell>{item.gain}</Table.Cell>
      </Table.Row>
    );
  });

  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Pari</Table.HeaderCell>
          <Table.HeaderCell>cote</Table.HeaderCell>
          <Table.HeaderCell>mise</Table.HeaderCell>
          <Table.HeaderCell>gain</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {historyBets}
      </Table.Body>
    </Table>
  );
};

HistoryBet.propTypes = {
  bets: PropTypes.array.isRequired,
};

export default HistoryBet;
