import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import './style.scss';

const Highlights = ({ ratio, bestWin }) => (
  // Tester https://codesandbox.io/s/vymm4oln6y
  // Pour CSS circle dynamic en React
  <div>
    <div className="highlights_header">
      <div className="highlights_title"> Ratio </div>
      <div className="highlights_title"> Record </div>
    </div>
    <div className="highlights">
      <CircularProgressbar
        className="highlights__circle"
        value={ratio}
        text={`${ratio} %`}
      />
      ;
      <CircularProgressbar
        className="highlights__circle"
        value={bestWin}
        text={`${bestWin} €`}
      />
      ;
    </div>
  </div>
);

Highlights.propTypes = {
  ratio: PropTypes.number.isRequired,
  bestWin: PropTypes.number,
};
Highlights.defaultProps = {
  bestWin: null,
};

export default Highlights;
