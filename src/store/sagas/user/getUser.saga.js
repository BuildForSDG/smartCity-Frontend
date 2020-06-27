import {put, takeLatest, call} from 'redux-saga/effects';
import config from '../../../config/system';
import user from "../../../services/userServices";
import {
    GET_USERS,
    GET_USERS_ERROR,
    GET_USERS_SUCCESS
}
    from "../../actions/user";

function* getUserSaga(action) {
    const { type } = action.payload
    const url = config.userBaseUrl + `/${type}`
    try {
        const data = yield call(user.getUser, url);
        yield put({
            type: GET_USERS_SUCCESS,
            payload: data
        });

    } catch (error) {
        yield put({
            type: GET_USERS_ERROR, payload: error
        });
    }
}


export function* getUserWatcher() {
    yield takeLatest(GET_USERS, getUserSaga);
}