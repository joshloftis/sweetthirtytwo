import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';
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
      contractId: Date.now(),
      first_name: '',
      last_name: '',
      email: '',
      address: '',
      total: '',
      fees: '',
      down_payment: '',
      insurance: '',
      range: '',
      terms: '',
      fireRedirect: false,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    e.preventDefault();
    this.props.addContracteeMutation({
      variables: {
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        email: this.state.email,
        address: this.state.address,
        business: this.props.data.getUser.business._id,
      },
    }).then((contractee) => {
      if (contractee) {
        return this.props.addPaymentContractMutation({
          variables: {
            contractee: contractee.data.addContractee._id,
            total: this.state.total,
            fees: this.state.fees,
            down_payment: this.state.down_payment,
            insurance: this.state.insurance,
            range: this.state.range,
            terms: this.state.terms,
          },
          refetchQueries: [{
            query: gql`
            query GetUser {
              getUser {
                _id
                firstName
                lastName
                business {
                  _id
                  logo
                  name
                  contracts {
                    _id
                    first_name
                    last_name
                    email
                    address
                    completed
                    status
                    paymentContract {
                      total
                      fees
                      down_payment
                      insurance
                      range
                      monthly_payment
                      terms
                    }
                  }
                }
              }
            }`,
          }],
        }).then(paymentContract => this.setState({ fireRedirect: true }));
      }
      return Promise.reject(Error('Contractee was not added, so payment terms cannot be added.'));
    }).catch((error) => {
      console.log('An error:', error);
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
    const { fireRedirect } = this.state;
    let sidebar = null;
    if (this.props.data.loading) {
      sidebar = <h3>Loading...</h3>;
    } else {
      sidebar = (
        <SideBar
          key={this.props.data.getUser.business._id}
          name={this.props.data.getUser.business.name}
          logo={this.props.data.getUser.business.logo}
        />
      );
    }
    return (
      <div>
        <NavHeader />
        <div className="row all-content">
          <div className="sideBar2 col-3">
            {sidebar}
          </div>
          <div className="col-9">
            <div className="container contractee-form">
              <form className="mx-auto add-contractee-form">
                <hr className="form-hr mx-auto" />
                <h2 className="form-header text-center"><span className="header-background">Contract Information</span></h2>
                <hr className="form-hr mx-auto" />
                <div className="form-row">
                  <fieldset disabled className="col-4">
                    <div className="form-group">
                      <input
                        id="ContractID"
                        type="text"
                        className="form-control"
                        placeholder={this.state.contractId}
                        name="contractId"
                      />
                      <label htmlFor="ContractID">Contract ID</label>
                    </div>
                  </fieldset>
                  <div className="form-group col-4">
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
                    <label htmlFor="first_name">First Name</label>
                  </div>
                  <div className="form-group col-4">
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
                    <label htmlFor="last_name">Last Name</label>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-4">
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
                    <label htmlFor="email">Email</label>
                  </div>
                  <div className="form-group col-4">
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
                    <label htmlFor="address">Address</label>
                  </div>
                </div>
                <div className="payment-section">
                  <hr className="form-hr mx-auto" />
                  <h2 className="form-header text-center"><span className="header-background">Payment Terms</span></h2>
                  <hr className="form-hr mx-auto" />
                </div>
                <div className="form-row">
                  <div className="form-group col-4">
                    <input
                      id="total"
                      type="number"
                      className="form-control"
                      placeholder="Total Cost"
                      name="total"
                      value={this.state.total}
                      onChange={this.handleInputChange}
                    />
                    <label htmlFor="ContractID">Total</label>
                  </div>
                  <div className="form-group col-4">
                    <input
                      id="fees"
                      type="number"
                      className="form-control"
                      placeholder="Enter fees"
                      required="required"
                      name="fees"
                      value={this.state.fees}
                      onChange={this.handleInputChange}
                    />
                    <label htmlFor="fees">fees</label>
                  </div>
                  <div className="form-group col-4">
                    <input
                      id="down_payment"
                      type="number"
                      className="form-control"
                      placeholder="Enter down payment"
                      required="required"
                      name="down_payment"
                      value={this.state.down_payment}
                      onChange={this.handleInputChange}
                    />
                    <label htmlFor="down_payment">down_payment</label>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-4">
                    <input
                      id="insurance"
                      type="number"
                      className="form-control"
                      placeholder="Insurance coverage amount"
                      required="required"
                      name="insurance"
                      value={this.state.insurance}
                      onChange={this.handleInputChange}
                    />
                    <label htmlFor="insurance">Insurance</label>
                  </div>
                  <div className="form-group col-4">
                    <input
                      id="range"
                      type="number"
                      className="form-control"
                      placeholder="Months of payment"
                      required="required"
                      name="range"
                      value={this.state.range}
                      onChange={this.handleInputChange}
                    />
                    <label htmlFor="range">Range</label>
                  </div>
                  <div className="form-group col-4">
                    <input
                      id="terms"
                      type="text"
                      className="form-control"
                      placeholder="Enter payment terms"
                      required="required"
                      name="terms"
                      value={this.state.terms}
                      onChange={this.handleInputChange}
                    />
                    <label htmlFor="terms">Terms</label>
                  </div>
                </div>
                <button type="submit" className="login-button" onClick={this.onClick}>Submit</button>
              </form>
              {fireRedirect && (
              <Redirect to="/suite32" />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const AddContracteeMutation = gql`
 mutation addContractee($first_name: String, $last_name: String, $email: String, $address: String, $business: String) {
  addContractee(first_name: $first_name, last_name: $last_name, email: $email, address: $address, business: $business) {
        _id
        first_name
        last_name
        email
        address
      }
    }
  `;

const AddPaymentContractMutation = gql`
    mutation addPaymentContract($contractee: String, $total: Float, $fees: Float, $insurance: Float, $down_payment: Float, $range: Float, $terms: String) {
      addPaymentContract(contractee: $contractee, total: $total, fees: $fees, insurance: $insurance, down_payment: $down_payment, range: $range, terms: $terms) {
        _id
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


export default withRouter(compose(
  graphql(AddContracteeMutation, { name: 'addContracteeMutation' }),
  graphql(AddPaymentContractMutation, { name: 'addPaymentContractMutation' }),
  graphql(GetUser),
)(AddContractee));
