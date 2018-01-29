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
        <article className="viz animate colorsplit mw5 bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
          <div className="tc">
            <img
              src="https://vignette.wikia.nocookie.net/powerlisting/images/7/7a/Daenerys_Targaryen_Game_of_Thrones_Fire_Immunity.jpg/revision/latest?cb=20160629183606"
              className="br-100 h3 w3 dib"
              title="Photo of daenerys targaryen"
              alt="Profile"
            />
            <h4>Mikal Bright</h4>
            <hr className="mw4 bb bw1 b--black-10" />
            <h5 className="alpha">Total: 5,567</h5>
            <h5 className="beta">Fees: 300</h5>
            <h5 className="charlie">Insurance: 500</h5>
            <h5 className="delta">Down Payment: 500</h5>
            <h5 className="echo">Range: 12</h5>
            <h5 className="foxtrot">Monthly Payment: 48.98</h5>
          </div>
          <CardButton />
        </article>
    </div>
  );
export default CardBody;
