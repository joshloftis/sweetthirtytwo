import React, { Component } from 'react';
import Header from './navheader';
import Cheader from './cardheader';
import Cardbody from './cardbody';
import Agreement from './agreement';
import Button from './cardbutton';
import Esign from './esign';
import Input from './input';
import Payments from './monthlypayment';
import Slider from './slider';
import Table from './table';
import Terms from './terms';
import Cardlayout from './cardlayout';
import '../css/app.css'



class App extends Component {

  // state = {
  //   cardbody: [
  //       {
  //         img: ,
  //         name: ,
  //         totalcost: ,
  //       }]};


  render() {
    return (
      <div>
        <Header />
          <Cheader />
            <div className="grid">
            <div className="col">
              <Cardbody />
              <Cardbody />
              </div>
              <div className="col">
              <Cardbody />
              <Cardbody />
              </div>
              <div className="col">
              <Cardbody />
              <Cardbody />
              </div>
            </div>
      </div>
    );
  }
}

export default App;