import * as Actions from '../../actions/index';

const initialState = {
    open: false,
    data: []
};

const hire = (state = initialState, action) => {
    switch(action.type) {
        case Actions.SAVE_HIRE: {
            return {
                data: action.payload,
                open: true
            };
        }
        case Actions.SHOW_HIRE: {
            return {
                ...state,
                open: true
            };
        }
        case Actions.HIDE_HIRE: {
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

export default hire;
