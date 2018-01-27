
import React from 'react';
import InputField from './input';
/* eslint-disable */
import '../css/cardbody.css';

const InputField = props => {
    <div>
        <form>
            <div class="col">
                <div className=" mt3">
                    <label classNAme="db fw6 lh-copy f6" htmlFor="contractid">First Name
              </label>
                    <input
                        type="text"
                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                        placeholder="Contract ID"
                        name="contractid"
                        value={this.state.contractid}
                        onChange={this.handleInputChange}
                        required
                    />
                </div>
                <div className=" mt3">
                    <label classNAme="db fw6 lh-copy f6" htmlFor="firstName">First Name
              </label>
                    <input
                        type="text"
                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                        placeholder="First Name"
                        name="firstname"
                        value={this.state.firstname}
                        onChange={this.handleInputChange}
                        required
                    />
                </div>
                <div className=" mt3">
                    <label classNAme="db fw6 lh-copy f6" htmlFor="lastName">First Name
              </label>
                    <input
                        type="text"
                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                        placeholder="Last Name"
                        name="lastname"
                        value={this.state.lastname}
                        onChange={this.handleInputChange}
                        required
                    />
                </div>
                <div className=" mt3">
                    <label classNAme="db fw6 lh-copy f6" htmlFor="email">First Name
              </label>
                    <input
                        type="text"
                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                        placeholder="Email Address"
                        name="emailaddress"
                        value={this.state.emailaddress}
                        onChange={this.handleInputChange}
                        required
                    />
                </div>
            </div>
        </form>
    </div>
};
export default InputField;