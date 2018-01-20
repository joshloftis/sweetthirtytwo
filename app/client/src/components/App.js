import React, { Component } from 'react';
import Header from './navheader';
import Cardheader from './cardheader';
import Cardheadertwo from './cardheadersecondary';
import Cardbody from './cardbody';
import Cardbodytwo from './cardbodysecondary';
import Agreement from './agreement';
import Button from './cardbutton';
import Esign from './esign';
import Input from './input';
import Payments from './monthlypayment';
import Slider from './slider';
import Table from './table';
import Terms from './terms';
import Cardlayout from './cardlayout';
import Avatar from './avatar';
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
        <Avatar />
          <Cardheader />
            <div className="grid">
            <div className="col">
              <Cardbody />
              </div>
              <div className="col">
              <Cardbody />
              </div>
              <div className="col">
              <Cardbody />
              </div>
            </div>
          <Cardheadertwo />
            <div className="grid">
            <div className="col">
              <Cardbodytwo />
              </div>
              <div className="col">
              <Cardbodytwo />
              </div>
              <div className="col">
              <Cardbodytwo />
              </div>
            </div>
      </div>
    );
  }
}

export default App;