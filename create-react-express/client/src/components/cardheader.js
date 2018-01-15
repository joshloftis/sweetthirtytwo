import React from 'react';
import App from './App';
import '../css/cardheader.css';

const Header = props =>
    <div className="App">
        <div className="App-header">
            {/* Both of the img's below should be the logo icons in the mockup */}
            <img src="" className="App-logo" alt="logo" />
            <img src="" className="App-logo" alt="logo" />
            <h2 className="title">Suite32</h2>
            <h4 className="addcustomer"> + Add New Customer</h4>
        </div>
    </div>

export default Header;
