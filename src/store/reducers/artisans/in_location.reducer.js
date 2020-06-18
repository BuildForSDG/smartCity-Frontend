import * as Actions from '../../actions';

const initialState = {
  data: [],
  isLoading: false,
  error: false
};

function inLocationReducer(location) {
  return function (state = initialState, action) {
    switch (action.type) {
      case Actions.GET_LOCATION_ARTISANS+location: {
        return {
          ...state,
          isLoading: true,
          error: false
        };
      }
      case Actions.GET_LOCATION_ARTISANS_SUCCESS+location: {
        return {
          ...state,
          data: action.payload,
          isLoading: false,
          error: false
        };
      }
      case Actions.GET_LOCATION_ARTISANS_ERROR+location: {
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

export default inLocationReducer;
