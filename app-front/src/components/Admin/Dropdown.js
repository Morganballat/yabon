import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import PropTypes from 'prop-types';

//console.log('salut');

const DropdownBets = ({ apiMatches, handleMatch }) => {
  const matchOptions = [];

  // console.log('dropdown', apiMatches);
  for (let i = 0; i < apiMatches.length; i++) {
    // console.log(apiMatches[i].host_team);

    matchOptions.push(
      { key: `${apiMatches[i].id}`, value: `${apiMatches[i].host_team} - ${apiMatches[i].visitor}`, text: `${apiMatches[i].host_team} - ${apiMatches[i].visitor}` },
    );
  }

  // console.log('ici matchoption', matchOptions);
  // apiMatches.forEach(team => {
  //   matchOptions.push({ key: 1, value: `${team.value}`, text: `${team.value}` },)
  // });

  return (
    <div className="dropdownElement">
      <Dropdown
        placeholder="Selectionner un match"
        fluid
        search
        selection
        options={matchOptions}
      />
      <div className="button_dropdown">
      <button className="admin_submit" type="button" onClick={handleMatch}>Valider le match</button>
      </div>
    </div>
  );
};

DropdownBets.propTypes = {
  apiMatches: PropTypes.array.isRequired,
  handleMatch: PropTypes.func,
};
DropdownBets.defaultProps = {
  handleMatch: () => {},
};

export default DropdownBets;
