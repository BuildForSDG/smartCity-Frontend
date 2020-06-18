import { all } from 'redux-saga/effects';
import { getAnArtisanWatcher } from './an_artisan.saga';

export default function* artisansSaga() {
    yield all([
        getAnArtisanWatcher()
    ])
}
