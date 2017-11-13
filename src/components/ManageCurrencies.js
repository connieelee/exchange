import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { saveNewDefault } from '../redux/reducers/defaultCurrency';

const mapState = state => ({
  currencies: state.currencies,
  defaultCurrency: state.defaultCurrency,
});
const mapDispatch = dispatch => ({
  saveNewDefault: currencyData => dispatch(saveNewDefault(currencyData)),
});

const ManageCurrencies = ({ currencies, defaultCurrency, saveNewDefault }) => (
  <div>
    <p>Manage Your Currencies</p>
    <Link to="/index.html"><button>back to home</button></Link>
    <ul>
      {
        currencies.map(currency => (
          <li key={currency.name}>
            {currency.name}: {currency.value}
            {
              currency.name === defaultCurrency.name ?
              ' (IS DEFAULT)' :
              <button onClick={() => { saveNewDefault(currency); }}>
                set as default
              </button>
            }
          </li>
        ))
      }
    </ul>
  </div>
);

export default connect(mapState, mapDispatch)(ManageCurrencies);