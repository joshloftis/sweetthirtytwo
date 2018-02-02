import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { onError } from 'apollo-link-error';
import 'bootstrap/dist/css/bootstrap.css';
import App from './components/App';
import Login from './components/Login';
import SignUp from './components/SignUp';
import AddBusiness from './components/CreateBusiness';
import AddContractee from './components/AddContractee';
import NotFound from './components/NotFound';
import './css/index.css';


const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql',
  credentials: 'include',
});

const unauthorizedAccess = onError(({ networkError }) => {
  if (networkError.statusCode === 401) {
    return <Redirect to="/login" />;
  }
});

const client = new ApolloClient({
  link: unauthorizedAccess.concat(httpLink),
  cache: new InMemoryCache(),
});

const Root = () => (
  <BrowserRouter>
    <ApolloProvider client={client}>
      <Switch>
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/add_business" component={AddBusiness} />
        <Route exact path="/suite32" component={App} />
        <Route exact path="/add_contractee" component={AddContractee} />
        <Route component={NotFound} />
      </Switch>
    </ApolloProvider>
  </BrowserRouter>
);

ReactDOM.render(<Root />, document.getElementById('root'));
