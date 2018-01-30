import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';
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

  handleInputChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  onClick(e) {
    e.preventDefault();
    this.props.mutate({
      variables: {
        username: this.state.username,
        password: this.state.password,
      },
    })
      .then((owner) => {
        console.log('Login succeeded', owner.data.login);
      }).catch((error) => {
        console.log('Log in did not succeed because:', error);
      });
  }

  render() {
    return (
      <main className="mainspace black-80">
        <form className="measure center" />
        <fieldset id="sign_up" className="ba b--transparent ph0 mh0" />
        <legend className="f4 fw6 ph0 mh0">Sign In</legend>
        <div>
          <form>
            <div className="mt3">
              <label classNAme="db fw6 lh-copy f6" htmlFor="email-address">Username</label>
              <input
                type="text"
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                placeholder="Username"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChange}
                required
              />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
              <input
                type="password"
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                placeholder="Password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChange}
                required
              />
            </div>
          </form>
          <div className="">
            <input
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              type="submit"
              onClick={this.onClick}
              value="Sign in"
            />
          </div>
          <div class="g-signin2" id="google" data-onsuccess="onSignIn" data-theme="dark">login with Google</div>

          <div className="lh-copy mt3">
            <a href="#0" className="f6 link dim black db">Sign Up</a>
            <a href="#0" className="f6 link dim black db">Forgot your password?</a>
          </div>
        </div>

      </main>
    );
  }
}

const LoginMutation = gql`
    mutation login($username: String, $password: String) {
      login(username: $username, password: $password) {
        _id
        firstName
        lastName
        username
      }
    }
  `;

Login.propTypes = {
  mutate: PropTypes.func,
};


export default graphql(LoginMutation)(Login);
