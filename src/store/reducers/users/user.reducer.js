import * as Actions from '../../actions';

const initialState = {
  data: null,
  isLoading: false,
  error: false
};

function UserReducer(state = initialState, action) {
  switch (action.type) {
    case Actions.POST_USERS: {
      return {
        ...state,
        isLoading: true,
        error: false
      };
    }
    case Actions.POST_USERS_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        error: false
      };
    }
    case Actions.POST_USERS_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    }
    case Actions.GET_USERS: {
      return {
        ...state,
        isLoading: true,
        error: false
      };
    }
    case Actions.GET_USERS_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        error: false
      };
    }
    case Actions.GET_USERS_ERROR: {
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
}

export default UserReducer;
