import React from 'react';

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

export default AddCurrencyForm;
