import React from 'react';
// import PropTypes from 'prop-types';
import '../css/navheader.css';

class NavHeader extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid">
          <h1 className="mx-auto" href="/">SuiteThirtyTwo</h1>
        </div>
      </nav>
    );
  }
}

module.exports = NavHeader;
