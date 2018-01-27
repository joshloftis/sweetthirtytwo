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
      { console.log(props.paymentContract.total) }
      <span className="viz colorsplit">
        <article className="colorsplit measure mw5 bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
          <div className="tc">
            <img
              src="https://vignette.wikia.nocookie.net/powerlisting/images/7/7a/Daenerys_Targaryen_Game_of_Thrones_Fire_Immunity.jpg/revision/latest?cb=20160629183606"
              className="hideme showme br-100 h3 w3 dib"
              title="Photo of daenerys targaryen"
              alt="Profile"
            />
            <h4>{props.first_name} {props.last_name}</h4>
            <h4>Total: {props.paymentContract.total}</h4>
            <h4>Fees: {props.paymentContract.fees}</h4>
            <h4>Insurance: {props.paymentContract.insurance}</h4>
            <h4>Down Payment: {props.paymentContract.down_payment}</h4>
            <h4>Range: {props.paymentContract.range}</h4>
            <h4>Monthly Payment: {props.paymentContract.monthly_payment.toFixed(2)}</h4>
            <hr className="mw4 bb bw1 b--black-10" />
          </div>
          <CardButton />
        </article>
      </span>
    </div>
  );
export default CardBody;
