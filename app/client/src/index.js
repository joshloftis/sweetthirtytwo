import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import 'bootstrap/dist/css/bootstrap.css';
import App from './components/App';
import Login from './components/Login';
import SignUp from './components/SignUp';
import AddBusiness from './components/CreateBusiness';
import AddContractee from './components/AddContractee';
import UpdateContractee from './components/UpdateContractee';
import NotFound from './components/NotFound';
import './css/index.css';


const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql',
  credentials: 'include',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

class Root extends React.Component {
  constructor(props) {
    super(props);

    this.requireAuth = this.requireAuth.bind(this);
  }

  requireAuth() {
    if (document.cookie.match(/^(.*;)?\s*jwtAuthToken\s*=\s*[^;]+(.*)?$/)) {
      return false;
    }
    return true;
  }

  render() {
    return (
      <BrowserRouter>
        <ApolloProvider client={client}>
          <Switch>
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/login" component={Login} />
            <Route
              exact
              path="/add_business"
              render={() => (
              this.requireAuth() ? (
                <Redirect to="/login" />
                  ) : (
                    <AddBusiness />
                  )
                )}
            />
            <Route
              exact
              path="/add_contractee/"
              render={() => (
                this.requireAuth() ? (
                  <Redirect to="/login" />
                    ) : (
                      <AddContractee />
                    )
                  )}
            />
            <Route
              exact
              path="/update_contractee/:id"
              render={() => (
              this.requireAuth() ? (
                <Redirect to="/login" />
                  ) : (
                    <UpdateContractee />
                  )
                )}
            />
            <Route
              exact
              path="/suite32"
              render={() => (
              this.requireAuth() ? (
                <Redirect to="/login" />
                  ) : (
                    <App />
                  )
                )}
            />
            <Route component={NotFound} />
          </Switch>
        </ApolloProvider>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById('root'));
