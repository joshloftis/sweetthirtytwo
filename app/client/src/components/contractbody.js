
import React from 'react';
import InputField from './input';
/* eslint-disable */
import '../css/cardbody.css';

const InputField = props => <div>
    <form>
        <div class="col">
            <div className=" mt3">
                <label classNAme="db fw6 lh-copy f6" htmlFor="firstName">First Name
              </label>
              <input
                type="text"
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                placeholder="First Name"
                name="firstname"
                value={this.state.username}
                onChange={this.handleInputChange}
                required
              />
            </div>
        </div>    
    </form>    
</div>;
export default InputField;