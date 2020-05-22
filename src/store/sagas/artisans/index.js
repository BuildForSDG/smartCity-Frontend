import { all } from 'redux-saga/effects';
import { getAllArtisansWatcher } from './get_all_artisans.saga';

export default function* artisansSaga() {
    yield all ([
        getAllArtisansWatcher()
    ])
}
