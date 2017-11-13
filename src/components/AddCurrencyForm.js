import React from 'react';
import { connect } from 'react-redux';

import { saveNewCurrency } from '../redux/reducers/currencies';

const mapState = null;
const mapDispatch = dispatch => ({
  submitCurrency: event => {
    event.preventDefault();
    const name = event.target['custom-currency'].value;
    const value = event.target['monetary-value'].value;
    dispatch(saveNewCurrency(name, value));
  },
});

const AddCurrencyForm = ({ submitCurrency }) => (
  <form onSubmit={submitCurrency}>
    <div>
      <p>What is your custom currency?</p>
      <input
        type="text"
        name="custom-currency"
        placeholder="e.g. Cheeseburgers..."
      />
    </div>
    <div>
      <p>What is its monetary value?</p>
      <input
        type="number"
        step="0.01"
        min="0"
        name="monetary-value"
        placeholder="4.95"
      />USD
    </div>
    <button type="submit">Submit</button>
  </form>
);

export default connect(mapState, mapDispatch)(AddCurrencyForm);
