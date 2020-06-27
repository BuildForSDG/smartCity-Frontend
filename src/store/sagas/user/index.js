import { all } from 'redux-saga/effects';
import {getUserWatcher} from './getUser.saga';
import { postUserWatcher } from './postUsers.saga'

export default function* userSaga() {
    yield all([
        getUserWatcher(),
        postUserWatcher()
    ]);
}