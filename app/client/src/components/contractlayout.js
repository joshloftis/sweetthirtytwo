import React from 'react';
import InputField from './input';
import InputFieldTwo from './inputsecondary';
import ContractHeaderTwo from './contractheadersecondary';

import '../css/cardbody.css';

const InputLayout = props => (
    <div className="grid">
        <div className="col">
            <InputField />
            <InputField />
            <InputField />
        </div>
        <div className="col">
            <InputField />
            <InputField />
        </div>
        <div className="col">
            <InputField />
            <InputField />
        </div>
        <div>
            <ContractHeaderTwo />
        </div>
        <div className="col">
            <InputFieldTwo />
            <InputFieldTwo />
        </div>
        <div className="col">
            <InputFieldTwo />
            <InputFieldTwo />
        </div>
        <div className="col">
            <InputFieldTwo />
            <InputFieldTwo />
        </div>
    </div>
);
export default InputLayout;