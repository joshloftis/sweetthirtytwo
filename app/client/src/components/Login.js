import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onClick = this.onClick.bind(this);
  };

    handleInputChange(e) {
      const target = e.target;
      const value = target.value;
      const name = target.name;
      this.setState({
        [name]: value
      });
    }

    onClick(e) {
      e.preventDefault();
      this.props.mutate({
        variables: { 
          username: this.state.username,
          password: this.state.password
        }
      })
        .then((owner) => {
          console.log('Login succeeded', owner.data.login);
        }).catch((error) => {
          console.log('Log in did not succeed because:', error);
        });
    }

    render() {
      return (
        <div>
          <form>
            <input type="text"
              placeholder="Username"
              name="username"
              value={this.state.username}
              onChange={this.handleInputChange}
              required/>
            <input type="password"
              placeholder="Password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
              required/>
            <button type="Submit" onClick={this.onClick}>Submit</button>
          </form>
        </div>
      );
    }
  }

  const LoginMutation = gql`
    mutation LoginUser($username: String, $password: String) {
      login(username: $username, password: $password) {
        _id
        firstName
        lastName
        username
      }
    }
  `;
  

export default graphql(LoginMutation)(Login);