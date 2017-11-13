const SET_DEFAULT = 'SET_DEFAULT';

const setDefault = currency => ({
  type: SET_DEFAULT,
  currency,
});

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
