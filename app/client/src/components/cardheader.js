import React from 'react';
// import PropTypes from 'prop-types';
import '../css/cardheader.css';

const CardHeader = props => (
  <div>
    <div className="background-div">
      <div className="mx-auto">
        <img className="profile-pic mx-auto d-block" src="https://images.moviepilot.com/images/c_limit,q_auto:good,w_600/sizvu0oqja4eiq6vci9q/5-signs-from-last-night-s-game-of-thrones-that-point-to-the-rise-of-daenerys-the-deranged.jpg" alt="Client profile" />
      </div>
    </div>
  </div>
);

module.exports = CardHeader;
