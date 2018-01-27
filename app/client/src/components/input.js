import React from 'react';
/* eslint-diable*/
import '../css/login.css';

const InputField = props => {
    <div>
        <form>
            <div class="col">
                <div className=" mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="contractid">Contract ID</label>
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
                    <label className="db fw6 lh-copy f6" htmlFor="firstName">First Name</label>
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
                    <label className="db fw6 lh-copy f6" htmlFor="lastName">Last Name</label>
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
                    <label className="db fw6 lh-copy f6" htmlFor="emailaddress">Email Address</label>
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
                <div className=" mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="phonenumber">Phone Number</label>
                    <input
                        type="text"
                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                        placeholder="Phone Number"
                        name="phonenumber"
                        value={this.state.phonenumber}
                        onChange={this.handleInputChange}
                        required
                    />
                </div>
                <div className=" mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="address">Address</label>
                    <input
                        type="text"
                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                        placeholder="Address"
                        name="address"
                        value={this.state.address}
                        onChange={this.handleInputChange}
                        required
                    />
                </div>
                <div className=" mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="dependency">Dependency</label>
                    <input
                        type="text"
                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                        placeholder="Dependency"
                        name="dependency"
                        value={this.state.dependency}
                        onChange={this.handleInputChange}
                        required
                    />
                </div>
            </div>
        </form>
    </div>
};

export default InputField;