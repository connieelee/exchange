import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { loadCurrencies } from '../redux/reducers/currencies';
import {
  loadDefault,
  saveNewDefault,
} from '../redux/reducers/defaultCurrency';

const mapState = state => ({
  currencies: state.currencies,
  defaultCurrency: state.defaultCurrency,
});
const mapDispatch = dispatch => ({
  loadCurrencies: () => dispatch(loadCurrencies()),
  loadDefault: () => dispatch(loadDefault()),
  saveNewDefault: currencyData => dispatch(saveNewDefault(currencyData)),
});

class Home extends React.Component {
  componentDidMount() {
    const { loadCurrencies, loadDefault } = this.props;
    this.props.loadCurrencies();
    this.props.loadDefault();
  }

  render() {
    const { currencies, defaultCurrency, saveNewDefault } = this.props;
    return (
      <div>
        <h1>exchange</h1>
        <p>your currencies</p>
        <ul>
          {
            currencies.map(currency => (
              <li key={currency.name}>
                {currency.name}: {currency.value}
                <button onClick={() => { saveNewDefault(currency); }}>
                  set as default
                </button>
              </li>
            ))
          }
        </ul>
        <p>default currency: {defaultCurrency.name} (${defaultCurrency.value})</p>
        <Link to="/add"><button>Add currency</button></Link>
      </div>
    );
  }
}

export default connect(mapState, mapDispatch)(Home);
