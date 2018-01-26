import React from 'react';

import '../css/cardbody.css';


const CardBody = props => 
  <div>
        <span className="viz">
        <article className="colorsplit measure mw5 bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
            <div className="tc">
                <h4>Show Date for next appointment.</h4>    
                <img src="https://vignette.wikia.nocookie.net/powerlisting/images/7/7a/Daenerys_Targaryen_Game_of_Thrones_Fire_Immunity.jpg/revision/latest?cb=20160629183606" 
                className="hideme showme br-100 h3 w3 dib" 
                title="Photo of daenerys targaryen"/>
                <h4>Customer Name</h4>
                <h5 className="hideme showme">Show Total Cost/Bill.</h5>
                <hr className="mw4 bb bw1 b--black-10"/>
            </div>
                <p className="hideme showme lh-copy measure center f6 black-70">
                    I swear this: If you ever betray me, I'll burn you alive.
                </p>
        </article>
        </span>
    </div>;
export default CardBody;



