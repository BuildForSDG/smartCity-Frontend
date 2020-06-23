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
            type: POST_USERS_SUCCESS+type,
            payload: data
        });

    } catch (error) {
        yield put({
            type: POST_USERS_ERROR + type, payload: error
        });
    }
}


export function* postUserWatcher(type) {
    yield takeLatest(POST_USERS + type, postUserSaga);
}