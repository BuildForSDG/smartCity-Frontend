import * as Actions from '../../actions';

const initialState = {
  data: [],
  isLoading: false,
  error: false
};

function postUserReducer(type) {
  return function (state = initialState, action) {
    switch (action.type) {
      case Actions.POST_USERS + type: {
        return {
          ...state,
          isLoading: true,
          error: false
        };
      }
      case Actions.POST_USERS_SUCCESS + type: {
        return {
          ...state,
          data: action.payload,
          isLoading: false,
          error: false
        };
      }
      case Actions.POST_USERS_ERROR + type: {
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

export default postUserReducer;