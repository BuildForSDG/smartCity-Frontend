import { combineReducers } from 'redux';
import item from './an_artisan.reducer';
import details from './artisan_details.reducer';

const artisan = combineReducers({
    item,
    details
});

export default artisan;
