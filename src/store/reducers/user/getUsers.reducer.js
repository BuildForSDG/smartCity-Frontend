import * as Actions from '../../actions';

const initialState = {
  data: [],
  isLoading: false,
  error: false
};

function getUserReducer(type) {
  return function (state = initialState, action) {
    switch (action.type) {
      case Actions.GET_USERS + type: {
        return {
          ...state,
          isLoading: true,
          error: false
        };
      }
      case Actions.GET_USERS_SUCCESS + type: {
        return {
          ...state,
          data: action.payload,
          isLoading: false,
          error: false
        };
      }
      case Actions.GET_USERS_ERROR + type: {
        return {
          ...state,
          isLoading: false,
          error: action.payload
        };
      }
      default: {
        return state;
      }
    }
  };
}

export default getUserReducer;