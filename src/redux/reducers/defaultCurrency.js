const SET_DEFAULT = 'SET_DEFAULT';

const setDefault = currency => ({
  type: SET_DEFAULT,
  currency,
});

export const loadDefault = () => dispatch => {
  chrome.storage.sync.get('_DEFAULT_', ({ _DEFAULT_ }) => {
    dispatch(setDefault(_DEFAULT_));
  });
};
export const saveNewDefault = currencyData => dispatch => {
  chrome.storage.sync.set({ _DEFAULT_: currencyData }, () => {
    dispatch(setDefault(currencyData));
  });
};

export default (prevState = {}, action) => {
  switch (action.type) {
    case SET_DEFAULT: {
      return action.currency;
    }
    default: {
      return prevState;
    }
  }
};
