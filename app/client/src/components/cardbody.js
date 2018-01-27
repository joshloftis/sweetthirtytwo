import React from 'react';
import CardButton from './cardbutton';
import '../css/cardbody.css';


const CardBody = props => (
  <div>
        <span className="viz colorsplit">
        <article className="colorsplit measure mw5 bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
            <div className="tc">
                <h4>Show Date for next appointment.</h4>    
                <img src="data:image/jpeg;base64,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" 
                className="hideme showme br-100 h3 w3 dib" 
                title="Photo of daenerys targaryen"/>
                <h4>Customer Name</h4>
                <h5>Show Total Cost/Bill.</h5>
                <hr className="mw4 bb bw1 b--black-10"/>
            </div>
                <CardButton />
        </article>
        </span>
    </div>
);
export default CardBody;
