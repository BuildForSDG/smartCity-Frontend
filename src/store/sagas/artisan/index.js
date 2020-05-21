import { all } from 'redux-saga/effects';
import { getAnArtisanWatcher } from './an_artisan.saga';
import { getAnArtisanDetailsWatcher } from './artisan_details.saga';

export default function* artisansSaga() {
    yield all([
        getAnArtisanWatcher(),
        getAnArtisanDetailsWatcher()
    ])
}
