import * as Actions from '../../actions';

const initialState = {
    data: [],
    isLoading: false,
    error: false
};

export default (state = initialState, action) => {
    switch (action.type) 
    {
        case Actions.GET_AN_ARTISAN_DETAILS: {
            return {
                ...state,
                isLoading: true,
                error: false
            };
        }
        case Actions.GET_AN_ARTISAN_DETAILS_SUCCESS: {
            return {
                ...state,
                data: action.payload,
                isLoading: false,
                error: false
            };
        }
        case Actions.GET_AN_ARTISAN_DETAILS_ERROR: {
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        }
        default: 
            return state;
    }
};
