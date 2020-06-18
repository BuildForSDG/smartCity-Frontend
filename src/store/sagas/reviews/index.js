import { all } from 'redux-saga/effects';
import { reviewWatcher } from './review.saga';

export default function* reviewSaga() {
    yield all([
        reviewWatcher()
    ]);
}