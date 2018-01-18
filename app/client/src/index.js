import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './components/App';
import Login from './components/Login';
import SignUp from './components/SignUp';
import NotFound from './components/NotFound';
import './css/index.css';

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


class Root extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/suite32" component={App} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </ApolloProvider>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById('root'));
