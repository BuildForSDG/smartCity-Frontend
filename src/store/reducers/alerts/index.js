import {combineReducers} from 'redux';
import toast from './toast.reducer';
import cart from './cart.reducer';
import auth from './auth.reducer';
import review from './review.reducer';
import hire from './hire.reducer';

const alerts = combineReducers({
    toast,
    cart,
    auth,
    review,
    hire
});

export default alerts;