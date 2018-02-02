import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Logo from './Logo';
import '../css/sidebar.css';

class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fireRedirect: false,
    };

    this.logout = this.logout.bind(this);
  }

  logout() {
    this.setState({ fireRedirect: true });
    document.cookie = 'jwtAuthToken=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }
  render() {
    const { fireRedirect } = this.state;
    return (
      <div className="sidebar">
        <Logo
          name={this.props.name}
          logo={this.props.logo}
        />
        <hr />
        <p className="logout" onClick={this.logout}>
          Logout
        </p>
        {fireRedirect && (<Redirect to="/login" />) }
      </div>
    );
  }
}

SideBar.propTypes = {
  name: PropTypes.string.isRequired,
  logo: PropTypes.string,
};

module.exports = SideBar;
