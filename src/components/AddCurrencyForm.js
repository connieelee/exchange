import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { saveNewCurrency } from '../redux/reducers/currencies';

const mapState = null;
const mapDispatch = dispatch => ({
  submitCurrency: event => {
    event.preventDefault();
    const name = event.target['currency-name'].value;
    const value = event.target['currency-value'].value; // eslint-disable-line prefer-destructuring
    dispatch(saveNewCurrency(name, value));
  },
});

const AddCurrencyForm = ({ submitCurrency }) => (
  <div>
    <h2>Add a new currency!</h2>
    <Link to="/index.html"><button>back to home</button></Link>
    <form onSubmit={submitCurrency}>
      <div>
        <p>What is your custom currency?</p>
        <input
          type="text"
          name="currency-name"
          placeholder="e.g. Cheeseburgers..."
        />
      </div>
      <div>
        <p>What is its monetary value?</p>
        <input
          type="number"
          step="0.01"
          min="0"
          name="currency-value"
          placeholder="4.95"
        />USD
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
);

export default connect(mapState, mapDispatch)(AddCurrencyForm);
