import React, { Component } from 'react';
import Header from './navheader';
import Cardlayout from './cardlayout';
import Avatar from './avatar';
import '../css/app.css';


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
      <div className="gridhome">
        <Header />
        <Avatar />
        <Cardlayout />
      </div>
    );
  }
}

export default App;
