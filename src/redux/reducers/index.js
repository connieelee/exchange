import { combineReducers } from 'redux';

import savedCurrencies from './savedCurrencies';
import defaultCurrency from './defaultCurrency';

export default combineReducers({
  savedCurrencies,
  defaultCurrency,
});
