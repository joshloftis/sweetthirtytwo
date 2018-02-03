import React from 'react';
// import PropTypes from 'prop-types';
import '../css/cardheader.css';

const CardHeader = props => (
  <div>
    <div className="background-div">
      <div className="mx-auto">
        <img className="profile-pic mx-auto d-block" src="https://mediasia.iafor.org/wp-content/uploads/sites/30/2017/02/IAFOR-Blank-Avatar-Image.jpg" alt="Client profile" />
      </div>
    </div>
  </div>
);

module.exports = CardHeader;
