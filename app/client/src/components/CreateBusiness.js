import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import NavHeader from './navheader';
import '../css/login.css';

class AddBusiness extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      logo: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    e.preventDefault();
    this.props.mutate({
      variables: {
        name: this.state.name,
        logo: this.state.logo,
      },
    }).then((business) => {
      this.props.history.push('/suite32');
    }).catch((error) => {
      console.log('Business was not created because:', error);
    });
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
              <label htmlFor="name">Business Name</label>
              <input
                id="name"
                type="text"
                className="form-control"
                placeholder="Enter business name"
                required="required"
                name="name"
                value={this.state.name}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Logo</label>
              <input
                id="logo"
                type="text"
                className="form-control"
                placeholder="Enter logo image url"
                required="required"
                name="logo"
                value={this.state.logo}
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

const AddBusinessMutation = gql`
    mutation addBusiness($name: String!, $logo: String!) {
      addBusiness(name: $name, logo: $logo) {
        _id
        name
        logo
      }
    }
  `;

AddBusiness.propTypes = {
  mutate: PropTypes.func,
};


export default graphql(AddBusinessMutation)(AddBusiness);
