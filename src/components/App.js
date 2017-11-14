import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import Home from './Home';
import AddCurrencyForm from './AddCurrencyForm';
import ManageCurrencies from './ManageCurrencies';

import { loadCurrencies } from '../redux/reducers/currencies';
import { loadDefault } from '../redux/reducers/defaultCurrency';

const mapState = null;
const mapDispatch = dispatch => ({
  loadInitialData: () => {
    dispatch(loadCurrencies());
    dispatch(loadDefault());
  },
});

class App extends React.Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/index.html" component={Home} />
          <Route path="/add" component={AddCurrencyForm} />
          <Route path="/manage" component={ManageCurrencies} />
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
};

export default connect(mapState, mapDispatch)(App);
