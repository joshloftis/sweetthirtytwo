import React from 'react';
import { Redirect, withRouter, Link } from 'react-router-dom';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import NavHeader from './NavHeader';
import SideBar from './SideBar';
import { formatPrice } from '../helpers';
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
    this.props.UpdateContracteeMutation({
      variables: {
        contractee: this.props.match.params.id,
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        email: this.state.email,
        address: this.state.address,
      },
    }).then((contractee) => {
      if (contractee) {
        return this.props.UpdatePaymentContractMutation({
          variables: {
            contractee: this.props.match.params.id,
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
    let form = null;
    if (this.props.GetUser.loading && this.props.GetContract.loading) {
      sidebar = <h3>Loading...</h3>;
    } else if (!this.props.GetUser.loading && !this.props.GetContract.loading) {
      sidebar = (
        <SideBar
          key={this.props.GetUser.getUser.business._id}
          name={this.props.GetUser.getUser.business.name}
          logo={this.props.GetUser.getUser.business.logo}
        />
      );
      form = (
        <form className="mx-auto add-contractee-form">
          <Link to="/suite32">Back</Link>
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
                placeholder={this.props.GetContract.getContract.first_name}
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
                placeholder={this.props.GetContract.getContract.last_name}
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
                placeholder={this.props.GetContract.getContract.email}
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
                placeholder={this.props.GetContract.getContract.address}
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
                placeholder={formatPrice(this.props.GetContract.getContract.paymentContract.total)}
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
                placeholder={formatPrice(this.props.GetContract.getContract.paymentContract.fees)}
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
                placeholder={formatPrice(this.props.GetContract.getContract.paymentContract.down_payment)}
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
                placeholder={formatPrice(this.props.GetContract.getContract.paymentContract.insurance)}
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
                placeholder={this.props.GetContract.getContract.paymentContract.range}
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
                placeholder={this.props.GetContract.getContract.paymentContract.terms}
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
              {form}
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

const UpdateContracteeMutation = gql`
 mutation updateContract($contractee: String!, $first_name: String, $last_name: String, $email: String, $address: String,) {
   updateContract(contractee: $contractee, first_name: $first_name, last_name: $last_name, email: $email, address: $address) {
        _id
        first_name
        last_name
        email
        address
      }
    }
  `;

const UpdatePaymentContractMutation = gql`
  mutation updatePaymentContract($contractee: String!, $total: Float, $fees: Float, $down_payment: Float, $insurance: Float, $range: Float, $terms: String) {
    updatePaymentContract(contractee: $contractee, total: $total, fees: $fees, down_payment: $down_payment, insurance: $insurance, range: $range, terms: $terms) {
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

const GetContract = gql`
  query getContract($contractId: String) {
    getContract(contractId: $contractId) {
      first_name
      last_name
      email
      address
      paymentContract {
        total
        fees
        insurance
        down_payment
        range
        terms
      }
    }
  }
`;

AddContractee.propTypes = {
  mutate: PropTypes.func,
};

export default withRouter(compose(
  graphql(UpdateContracteeMutation, {
    name: 'UpdateContracteeMutation',
  }),
  graphql(UpdatePaymentContractMutation, {
    name: 'UpdatePaymentContractMutation',
  }),
  graphql(GetContract, {
    name: 'GetContract',
    options: ownProps => ({ variables: { contractId: ownProps.match.params.id } }),
  }),
  graphql(GetUser, {
    name: 'GetUser',
  }),
)(AddContractee));
