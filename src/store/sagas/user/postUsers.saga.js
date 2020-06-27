import {put, takeLatest, call} from 'redux-saga/effects';
import userService from "../../../services/userServices";
import {
    POST_USERS,
    POST_USERS_ERROR,
    POST_USERS_SUCCESS
}
    from "../../actions/user";

function* postUserSaga(action) {
    const { type, user } = action.payload
    try {
        const data = yield call(userService.postUser, {type, user});
        yield put({
            type: POST_USERS_SUCCESS,
            payload: data
        });

    } catch (error) {
        yield put({
            type: POST_USERS_ERROR, payload: error
        });
    }
}


export function* postUserWatcher() {
    yield takeLatest(POST_USERS, postUserSaga);
}