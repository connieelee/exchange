import React from 'react';

const App = () => (
  <div>
    <h1>exchange</h1>
    <form>
      <div>
        <p>What is your custom currency?</p>
        <input name="custom-currency" type="text" placeholder="e.g. Cheeseburgers..." />
      </div>
      <div>
        <p>What is its monetary value?</p>
        <input name="value" type="number" placeholder="4.95" /> USD
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
);

export default App;
