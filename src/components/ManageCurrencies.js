import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { saveNewDefault } from '../redux/reducers/defaultCurrency';

const mapState = state => ({
  currencies: state.currencies,
  defaultCurrency: state.defaultCurrency,
});
const mapDispatch = dispatch => ({
  onDefaultClick: currencyData => dispatch(saveNewDefault(currencyData)),
});

const ManageCurrencies = ({ currencies, defaultCurrency, onDefaultClick }) => (
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
              <button onClick={() => { onDefaultClick(currency); }}>
                set as default
              </button>
            }
          </li>
        ))
      }
    </ul>
  </div>
);

ManageCurrencies.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.object),
  defaultCurrency: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.number,
  }),
  onDefaultClick: PropTypes.func.isRequired,
};
ManageCurrencies.defaultProps = {
  currencies: [],
  defaultCurrency: {},
};

export default connect(mapState, mapDispatch)(ManageCurrencies);
