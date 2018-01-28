import React from 'react';
import CardButton from './cardbutton';
import '../css/cardbody.css';


const CardBody = props =>
  // if (props.loading) {
  //   return <p>Fetching Data....</p>;
  // }
  // if (props.error) {
  //   return <p>{error.message}</p>;
  // }
  (
    <div>
      <span className="card colorsplit">
        <article className="colorsplit mw5 bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
          <div className="tc">
            <img
              src="https://vignette.wikia.nocookie.net/powerlisting/images/7/7a/Daenerys_Targaryen_Game_of_Thrones_Fire_Immunity.jpg/revision/latest?cb=20160629183606"
              className="hideme showme br-100 h3 w3 dib"
              title="Photo of daenerys targaryen"
              alt="Profile"
            />
            <h4 className="a">Mikal Bright</h4>
            <h5 className="b">Total: 5,567</h5>
            <h5 className="c">Fees: 300</h5>
            <h5 className="d">Insurance: 500</h5>
            <h5 className="e">Down Payment: 500</h5>
            <h5 className="f">Range: 12</h5>
            <h5 className="g">Monthly Payment: 48.98</h5>
            <hr className="h mw4 bb bw1 b--black-10" />
          </div>
          <CardButton />
        </article>
      </span>
    </div>
  );
export default CardBody;
