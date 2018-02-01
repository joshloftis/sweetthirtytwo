import React from 'react';
import auth from '../utils/auth';
// import PropTypes from 'prop-types';
import NavHeader from './NavHeader';
import '../css/login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    event.preventDefault();
    if (this.state.username && this.state.password) {
      auth.login({
        username: this.state.username,
        password: this.state.password,
      }).then((res) => {
        console.log(res);
        if (!res.data.error) {
          this.props.history.push('/suite32');
        }
      }).catch((error) => {
        console.log('Log in did not succeed because:', error);
      });
    }
  }

  handleInputChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <NavHeader />
        <div className="container">
          <form className="mx-auto login-form">
            <div className="form-group">
              <label htmlFor="username">Email address</label>
              <input
                id="username"
                type="text"
                className="form-control"
                placeholder="Enter email"
                required="required"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                className="form-control"
                placeholder="Password"
                required="required"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChange}
              />
            </div>
            <button type="submit" className="login-button" onClick={this.onClick}>Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
