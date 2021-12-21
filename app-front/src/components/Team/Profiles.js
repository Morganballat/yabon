import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import wlad from 'src/assets/img/wlad.png'
import julienR from 'src/assets/img/julienR.png'
import julienL from 'src/assets/img/julienL2.png'
import thomas from 'src/assets/img/thomas.png'
import morgan from 'src/assets/img/morgan.png'
import './style.scss';

const items = [
  {

    header: 'Wladimir',
    description:
      'Product Owner, Scrum Master, Dev Front',
  },
  {
    header: 'Julien L',
    description:
      'Lead Dev Backend, Referent techno (API ODDS)',
  },
  {
    header: 'Julien R',
    description:
      ' GitMaster, Dev Back',
  },
  {
    header: 'Morgan',
    description:
      'Lead Dev Front',
  },
  {
    header: 'Thomas',
    description:
      'Dev Front, Referent techno front (ChartJS)',
  },
];
//<Card.Group centered items={items}/>
const Profiles = () => (
  <div className="team_content">La Team
    <div className="team_mate">
    <div className="team_card">
      <div className="team_jobs">
        <h3 className="team_job">Product Owner</h3>
        <h3 className="team_job">Scrum Master</h3>
        <h3 className="team_job">Dev Front</h3>
      </div>
      <div className="team_pic-container">
        <img className="team_pic" src={wlad} alt="wlad" />
      </div>
      <h3 className="team_name">Wladimir</h3>
      <h3 className="team_subtitle">Grosomodo, voila voila!</h3>
    </div>
    <div className="team_card">
      <div className="team_jobs">
        <h3 className="team_job">Git Master</h3>
        <h3 className="team_job">Dev Back</h3>
        <h3 className="team_job">Stalk Master</h3>
      </div>
      <div className="team_pic-container">
        <img className="team_pic" src={julienR} alt="julienR" />
      </div>
      <h3 className="team_name">Julien R</h3>
      <h3 className="team_subtitle">Les gars il est 15h, je vais promener</h3>
    </div>
    <div className="team_card">
      <div className="team_jobs">
        <h3 className="team_job">Dev Front</h3>
        <h3 className="team_job">Référent ChartJs</h3>
      </div>
      <div className="team_pic-container">
        <img className="team_pic" src={thomas} alt="thomas" />
      </div>
      <h3 className="team_name">Thomas</h3>
      <h3 className="team_subtitle">Le berger du LiveShare!</h3>
    </div>
    <div className="team_card">
      <div className="team_jobs">
        <h3 className="team_job">Lead Dev Front</h3>
        <h3 className="team_job">Soluce Master</h3>
      </div>
      <div className="team_pic-container">
        <img className="team_pic" src={morgan} alt="morgan" />
      </div>
      <h3 className="team_name">Morgan</h3>
      <h3 className="team_subtitle">Ca va le faire ma p'tite poule !</h3>
    </div>
    <div className="team_card">
      <div className="team_jobs">
        <h3 className="team_job">Lead Dev Back</h3>
        <h3 className="team_job">Référent Api Odds</h3>
      </div>
      <div className="team_pic-container">
        <img className="team_pic" src={julienL} alt="julienL" />
      </div>
      <h3 className="team_name">Julien L</h3>
      <h3 className="team_subtitle">Le découpeur de fonctions!</h3>

    </div>
    </div>
  </div>
);

export default Profiles;
