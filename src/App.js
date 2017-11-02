import React from 'react';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import _ from 'lodash';

import Home from './Home';
import AddCurrencyForm from './AddCurrencyForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      savedCurrencies: {},
    };
  }

  componentDidMount() {
    chrome.storage.sync.get(null, items => {
      this.setState({ savedCurrencies: items });
    });

    chrome.storage.onChanged.addListener(changes => {
      this.setState(prevState => {
        const nextState = _.cloneDeep(prevState);
        Object.keys(changes).forEach(currency => {
          nextState.savedCurrencies[currency] = changes[currency].newValue;
        });
        return nextState;
      });
    });
  }

  submitCurrency(event) {
    event.preventDefault();
    const currency = event.target['custom-currency'].value;
    const monetaryValue = event.target['monetary-value'].value;
    chrome.storage.sync.set({ [currency]: monetaryValue });
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/index.html" component={Home} />
          {/* <Route exact path="/edit" render={() => {}} /> */}
          {/* <Route exact path="/set" render={() => {}} /> */}
          <Route
            path="/add"
            render={() => (
              <AddCurrencyForm submitCurrency={this.submitCurrency} />
            )}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
