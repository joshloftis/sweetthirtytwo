import React from 'react';
/* eslint-diable*/
import '../css/login.css';

const InputFieldTwo = props => {
    <div>
        <form>
            <div class="col">
                <div className=" mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="totalpayment">Total Payment:</label>
                    <input
                        type="text"
                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                        placeholder="Total Payment"
                        name="contractid"
                        value={this.state.totalpayment}
                        onChange={this.handleInputChange}
                        required
                    />
                </div>
                <div className=" mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="totalfees">Total Fees:</label>
                    <input
                        type="text"
                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                        placeholder="Total Fees"
                        name="totalfees"
                        value={this.state.totalfees}
                        onChange={this.handleInputChange}
                        required
                    />
                </div>
                <div className=" mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="downpayment">Down Payment:</label>
                    <input
                        type="text"
                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                        placeholder="Down Payment"
                        name="downpayment"
                        value={this.state.downpayment}
                        onChange={this.handleInputChange}
                        required
                    />
                </div>
                <div className=" mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="insurancecoverage">Insurance Coverage:</label>
                    <input
                        type="text"
                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                        placeholder="Insurance Coverage"
                        name="insurancecoverage"
                        value={this.state.insurancecoverage}
                        onChange={this.handleInputChange}
                        required
                    />
                </div>
                <div className=" mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="paymentrange">Payment Range:</label>
                    <input
                        type="text"
                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                        placeholder="Payment Range"
                        name="paymentrange"
                        value={this.state.paymentrange}
                        onChange={this.handleInputChange}
                        required
                    />
                </div>
                <div>
                    <p>Monthly<br> Payment:</p>
                        <p id="pay">{{payment}}</p>    
                </div>
            </div>
        </form>
    </div>
};

export default InputFieldTwo;