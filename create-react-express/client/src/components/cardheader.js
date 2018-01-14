import React from 'react';
import App from './App';
import '../css/cardheader.css';

const Header = props =>
    <container className="App">
        <div className="App-header">
            {/* Both of the img's below should be the logo icons in the mockup */}
            <img src="" className="App-logo" alt="logo" />
            <img src="" className="App-logo" alt="logo" />
            <h2 className="title">Suite32</h2>
            <h4 className="addcustomer"> + Add New Customer</h4>
        </div>
        <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
        </p>
    </container>

export default Header;
