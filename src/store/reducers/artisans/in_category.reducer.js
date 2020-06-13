import * as Actions from '../../actions';

const initialState = {
  data: [],
  isLoading: false,
  error: false
};

function inCategoryReducer(name) {
  return function (state = initialState, action) {
    switch (action.type) {
      case Actions.GET_CATEGORY_ARTISANS + name: {
        return {
          ...state,
          isLoading: true,
          error: false
        };
      }
      case Actions.GET_CATEGORY_ARTISANS_SUCCESS + name: {
        return {
          ...state,
          data: action.payload,
          isLoading: false,
          error: false
        };
      }
      case Actions.GET_CATEGORY_ARTISANS_ERROR + name: {
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

export default inCategoryReducer;

/*

const inCategoryReducer = function (state = initialState, action) {
    switch ( action.type )
    {
        case Actions.GET_CATEGORY_PRODUCTS:
        {
            return {
                ...state,
                isLoading: true,
                error: false
            };
        }
        case Actions.GET_CATEGORY_PRODUCTS_SUCCESS:
        {
            return {
                ...state,
                data: action.payload,
                isLoading: false,
                error: false
            };
        }
        case Actions.GET_CATEGORY_PRODUCTS_ERROR:
        {
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        }
        default:
        {
            return state;
        }
    }
};*/
