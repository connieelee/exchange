import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { loadCurrencies } from '../redux/reducers/currencies';

const mapState = state => ({
  currencies: state.currencies,
});
const mapDispatch = dispatch => ({
  loadCurrencies: () => dispatch(loadCurrencies()),
});

class Home extends React.Component {
  componentDidMount() {
    this.props.loadCurrencies();
  }

  render() {
    return (
      <div>
        <h1>exchange</h1>
        <p>your currencies</p>
        <ul>
          {
            Object.keys(this.props.currencies)
              .map(currency => (
                <li key={currency}>
                  {currency}: {this.props.currencies[currency]}
                </li>
              ))
          }
        </ul>
        <Link to="/add"><button>Add currency</button></Link>
      </div>
    );
  }
}

export default connect(mapState, mapDispatch)(Home);
