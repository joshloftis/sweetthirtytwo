import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
import App from './components/App';
import Login from './components/Login';
import SignUp from './components/SignUp';
import NotFound from './components/NotFound';
import './css/index.css';

const client = new ApolloClient({
  link: createHttpLink({ uri: 'http://localhost:4000/graphql' }),
  cache: new InMemoryCache(),
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
