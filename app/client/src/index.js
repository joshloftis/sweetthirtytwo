import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';
import App from './components/App';
import StorePicker from './components/Login';
import StorePicker from './components/SignUp';
import NotFound from './components/NotFound';
import './css/index.css';

const Root = () => (
  <BrowserRouter>
    <div>
      <Match exactly pattern="/signup" component={SignUp} />
      <Match exactly pattern="/login" component={Login} />
      <Match exactly pattern="/suite32" component={App} />
      <Miss component={NotFound} />
    </div>
  </BrowserRouter>
);

ReactDOM.render(<Root />, document.getElementById('root'));