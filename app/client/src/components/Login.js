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
        .then(({ owner }) => {
          console.log('Owner added', owner);
        }).catch((error) => {
          console.log('No owner added because of an error:', error);
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

  const AddOwnerMutation = gql`
    mutation AddAOwner($firstName: String, $lastName: String, $username: String, $password: String, $email: String) {
      addOwner(firstName: $firstName, lastName: $lastName, username: $username, password: $password, email: $email) {
        _id
        firstName
        lastName
        username
      }
    }
  `;
  

export default graphql(AddOwnerMutation)(Login);