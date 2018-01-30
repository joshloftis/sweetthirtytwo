import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { ApolloLink, concat } from 'apollo-link';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import 'bootstrap/dist/css/bootstrap.css';
import App from './components/App';
import Login from './components/Login';
import SignUp from './components/SignUp';
import NotFound from './components/NotFound';
import './css/index.css';


const httpLink = createHttpLink({ uri: 'http://localhost:4000/graphql' });

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}` || null,
    },
  });

  return forward(operation);
});

const client = new ApolloClient({
  link: concat(authMiddleware, httpLink),
  cache: new InMemoryCache(),
});

const Root = () => (
  <BrowserRouter>
    <ApolloProvider client={client}>
      <Switch>
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/suite32" component={App} />
        <Route component={NotFound} />
      </Switch>
    </ApolloProvider>
  </BrowserRouter>
);

ReactDOM.render(<Root />, document.getElementById('root'));
