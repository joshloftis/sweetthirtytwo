import React from 'react';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import NavHeader from './NavHeader';
import SideBar from './SideBar';
import '../css/addcontractee.css';

class AddContractee extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      address: '',
      business: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    e.preventDefault();
    this.props.mutate({
      variables: {
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        email: this.state.email,
        address: this.state.address,
        business: this.state.business,
      },
    }).then((contractee) => {
      this.props.history.push('/add_business');
    }).catch((error) => {
      console.log('Sign up did not succeed because:', error);
    });
  }

  handleInputChange(e) {
    const { target } = e;
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <NavHeader />
        <div className="row">
          <div className="sideBar col-3">
            <SideBar />
          </div>
          <div className="col-9">
            <div className="container contractee-form">
              <hr className="form-hr mx-auto" />
              <h2 className="form-header text-center"><span className="header-background">Contract Information</span></h2>
              <hr className="form-hr mx-auto" />
              <form className="mx-auto">
                <div className="form-row">
                  <fieldset disabled className="col-4">
                    <div className="form-group">
                      <label htmlFor="ContractID">Contract ID</label>
                      <input
                        id="ContractID"
                        type="text"
                        className="form-control"
                        placeholder={Date.now()}
                        name="contractId"
                      />
                    </div>
                  </fieldset>
                  <div className="form-group col-4">
                    <label htmlFor="first_name">First Name</label>
                    <input
                      id="first_name"
                      type="text"
                      className="form-control"
                      placeholder="Enter First Name"
                      required="required"
                      name="first_name"
                      value={this.state.first_name}
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <div className="form-group col-4">
                    <label htmlFor="last_name">Last Name</label>
                    <input
                      id="last_name"
                      type="text"
                      className="form-control"
                      placeholder="Enter Last Name"
                      required="required"
                      name="last_name"
                      value={this.state.last_name}
                      onChange={this.handleInputChange}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-4">
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      type="email"
                      className="form-control"
                      placeholder="Email Address"
                      required="required"
                      name="email"
                      value={this.state.email}
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <div className="form-group col-4">
                    <label htmlFor="address">Address</label>
                    <input
                      id="address"
                      type="text"
                      className="form-control"
                      placeholder="Enter mailing address"
                      required="required"
                      name="address"
                      value={this.state.address}
                      onChange={this.handleInputChange}
                    />
                  </div>
                </div>
                <button type="submit" className="login-button" onClick={this.onClick}>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const AddContracteeMutaion = gql`
    mutation addContractee($first_name: String, $last_name: String, $email: String, $address: String, $business: String) {
      addContractee(first_name: $first_name, last_name: $last_name, email: $email, address: $address, business: $business) {
        _id
        first_name
        last_name
        email
        address
        business
      }
    }
  `;

const GetUser = gql`
    query getUser {
      getUser {
        business {
          _id
          name
          logo
        }
      }
    }
  `;

AddContractee.propTypes = {
  mutate: PropTypes.func,
};


export default compose(graphql(AddContracteeMutaion), graphql(GetUser))(AddContractee);
