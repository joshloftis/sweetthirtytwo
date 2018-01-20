import React from 'react';
import App from './App';
import '../css/cardbody.css';

const Cardbody = props => 

    <div>
    <article className="measure mw5 bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
      <div className="tc">
        <img src="https://pbs.twimg.com/profile_images/2959799296/8adc8e7914393f0716a18e133e217dd9_400x400.jpeg" className="br-100 h3 w3 dib" title="Photo of daenerys targaryen"/>
          <h1 className="f4"></h1>
          <hr className="mw4 bb bw1 b--black-10"/>
      </div>
        <p className="lh-copy measure center f6 black-70">
            Blah blah blah, this is text.  We all like words.  
        </p>
    </article>
    </div>

export default Cardbody;



