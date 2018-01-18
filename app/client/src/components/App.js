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

import {
  ApolloClient,
  ApolloProvider,
  createNetworkInterface,
} from 'react-apollo';

const networkInterface = createNetworkInterface({ 
  uri: 'http://localhost:4000/graphql',
});
const client = new ApolloClient({
  networkInterface,
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <Header />
          <Owner />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;