import React, { Component } from 'react';
import Header from './cardheader';
// import Body from './cardbody';
// import Agreement from './agreement';
// import Button from './cardbutton';
// import Esign from './esign';
// import Input from './input';
// import Payments from './monthlypayment';
// import Slider from './slider';
// import Table from './table';
// import Terms from './terms';
import Owner from './Owner';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Owner />
      </div>
    );
  }
}

export default App;