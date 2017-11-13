const SET_CURRENCIES = 'SET_CURRENCIES';
const ADD_CURRENCY = 'ADD_CURRENCY';

const setCurrencies = currencies => ({
  type: SET_CURRENCIES,
  currencies,
});
const addCurrency = (name, value) => ({
  type: ADD_CURRENCY,
  name,
  value,
});

export const loadCurrencies = () => dispatch => {
  chrome.storage.sync.get(null, currencies => {
    dispatch(setCurrencies(currencies));
  });
};
export const saveNewCurrency = (name, value) => dispatch => {
  chrome.storage.sync.set({ [name]: value }, () => {
    dispatch(addCurrency(name, value));
  });
};

export default (prevState = {}, action) => {
  const nextState = Object.assign({}, prevState);
  switch (action.type) {
    case SET_CURRENCIES: {
      return action.currencies;
    }
    case ADD_CURRENCY: {
      nextState[action.name] = action.value;
      return nextState;
    }
    default: {
      return prevState;
    }
  }
};
