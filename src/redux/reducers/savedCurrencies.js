const SET_CURRENCIES = 'SET_CURRENCIES';

const setCurrencies = currencies => ({
  type: SET_CURRENCIES,
  currencies,
});

export const loadSavedCurrencies = () => dispatch => {
  chrome.storage.sync.get('savedCurrencies', currencies => {
    dispatch(setCurrencies(currencies));
  });
};

export default (prevState = {}, action) => {
  switch (action.type) {
    case SET_CURRENCIES: {
      return action.currencies;
    }
    default: {
      return prevState;
    }
  }
};
