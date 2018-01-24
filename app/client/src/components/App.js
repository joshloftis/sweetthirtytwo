import React, { Component } from 'react';
import Header from './navheader';
import CardLayout from './cardlayout';
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
      <div>
        <Header />
        <Avatar />
        <CardLayout />
      </div>
    );
  }
}

export default App;
