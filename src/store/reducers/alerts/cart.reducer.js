import * as Actions from '../../actions/index';

const initialState = {
  open: false,
  data: []
};

const cart = function (state = initialState, action) {
  switch (action.type) {
    case Actions.SAVE_CART: {
      return {
        data: action.payload,
        open: true
      };
    }
    case Actions.SHOW_CART: {
      return {
        ...state,
        open: true
      };
    }
    case Actions.HIDE_CART: {
      return {
        ...state,
        open: false
      };
    }
    default: {
      return state;
    }
  }
};

export default cart;
