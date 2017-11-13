import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import store from './redux/store';
import {
  Home,
  AddCurrencyForm,
  ManageCurrencies,
} from './components';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/index.html" component={Home} />
        <Route path="/add" component={AddCurrencyForm} />
        <Route path="/manage" component={ManageCurrencies} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
