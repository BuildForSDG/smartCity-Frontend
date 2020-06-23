import {combineReducers} from 'redux';
import get from './getUsers.reducer';
import post from './postUsers.reducer';


const user = combineReducers({
    register: post('register'),
    login: post('login'),
    all: get('all'),
    verify: get('verify'),
    auth: get('auth'),
    logout: get('logout')
});

export default user;