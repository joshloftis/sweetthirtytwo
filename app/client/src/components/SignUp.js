import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import '../css/login.css';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
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
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        username: this.state.username,
        password: this.state.password,
        role: 'owner',
      },
    }).then((user) => {
      console.log('user added', user.data.signup);
    }).catch((error) => {
      console.log('No user added because of an error:', error);
    });
  }

  render() {
    return (
      <main className="mainspace black-80">
        <form className="measure center" />
        <fieldset id="sign_up" className="ba b--transparent ph0 mh0" />
        <legend className="f4 fw6 ph0 mh0">Sign Up</legend>
        <div>
          <form>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="firstname">First Name</label>
              <input
                type="text"
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                placeholder="First Name"
                name="firstName"
                value={this.state.firstName}
                onChange={this.handleInputChange}
                required
              />
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="lastname">Last Name</label>
              <input
                type="text"
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                placeholder="Last Name"
                name="lastName"
                value={this.state.lastName}
                onChange={this.handleInputChange}
                required
              />
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email">Email</label>
              <input
                type="text"
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                placeholder="Email Address"
                name="email"
                value={this.state.email}
                onChange={this.handleInputChange}
                required
              />
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="username">Username</label>
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
            <div className="mt3">
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
        </div>
        <div className="">
          <input onClick={this.onClick} className="spacer b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" />
        </div>
      </main>
    );
  }
}

const AddNewUser = gql`
    mutation signup($firstName: String, $lastName: String, $username: String, $password: String, $email: String, $role: String) {
      signup(firstName: $firstName, lastName: $lastName, username: $username, password: $password, email: $email, role: $role) {
        _id
        firstName
        lastName
        username
        jwt
      }
    }
  `;

SignUp.propTypes = {
  mutate: PropTypes.func,
};


export default graphql(AddNewUser)(SignUp);
