import React from 'react';
import App from './App';
import '../css/cardbody.css';

const Cardlayout = props => {
    <div className="cardbody">
        <div className="flexGrid">{props.children}</div>
    </div>
};
 
export default Cardlayout;