import { combineReducers } from 'redux';

import currencies from './currencies';
import defaultCurrency from './defaultCurrency';

export default combineReducers({
  currencies,
  defaultCurrency,
});
