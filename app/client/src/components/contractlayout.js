import React from 'react';
import InputField from './input';

import '../css/cardbody.css';

const Inputlayout = props => {
    < div className="cardbody" >
        <div className="flexGrid">{props.children}</div>
    < /div>

};
export default Inputlayout;