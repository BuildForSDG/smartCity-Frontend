import * as Actions from '../../actions'

const initialState = {
    reviewData     : {},
    isSubmitting: false,
    error: false
};

const reviewReducer = function (state = initialState, action) {
    switch ( action.type )
    {
        case Actions.POST_PRODUCT_REVIEW:
        {
            return {
                ...state,
                isSubmitting: true,
                error: false
            };
        }
        case Actions.POST_PRODUCT_REVIEW_SUCCESS:
        {
            return {
                ...state,
                data: action.payload,
                isSubmitting: false,
                error: false
            };
        }
        case Actions.POST_PRODUCT_REVIEW_ERROR:
        {
            return {
                ...state,
                isSubmitting: false,
                error: action.payload
            };
        }
        default:
        {
            return state;
        }
    }
};

export default reviewReducer;