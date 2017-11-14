const SET_CURRENCIES = 'SET_CURRENCIES';
const ADD_CURRENCY = 'ADD_CURRENCY';

const setCurrencies = currencies => ({
  type: SET_CURRENCIES,
  currencies,
});
const addCurrency = (name, value) => ({
  type: ADD_CURRENCY,
  currencyData: { name, value },
});

export const loadCurrencies = () => dispatch => {
  chrome.storage.sync.get(null, currencies => {
    const currencyArr = [];
    Object.keys(currencies).forEach(currencyName => {
      if (currencyName !== '_DEFAULT_') {
        currencyArr.push({
          name: currencyName,
          value: currencies[currencyName],
        });
      }
    });
    dispatch(setCurrencies(currencyArr));
  });
};
export const saveNewCurrency = (name, value) => dispatch => {
  if (name === '_DEFAULT_') {
    console.error('cannot save a currency with name "_DEFAULT_"'); // TODO: handle more elegantly
  } else {
    chrome.storage.sync.set({ [name]: value }, () => {
      dispatch(addCurrency(name, value));
    });
  }
};

export default (prevState = [], action) => {
  switch (action.type) {
    case SET_CURRENCIES: {
      return action.currencies;
    }
    case ADD_CURRENCY: {
      return [...prevState, action.currencyData];
    }
    default: {
      return prevState;
    }
  }
};
