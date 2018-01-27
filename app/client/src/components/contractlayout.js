import React from 'react';
import InputField from './input';

import '../css/cardbody.css';

const Inputlayout = props =>
<div className="grid">
    <div className="col">
        <InputField/>
        <InputField/>
        <InputField/>
    </div>
    <div className="col">
        <InputField/>
        <InputField/>
        <InputField/>
    </div>
    <div className="col">
        <InputField/>
    </div>
</div>
export default Inputlayout;