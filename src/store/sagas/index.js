import {all} from 'redux-saga/effects';
import productsSaga from './products';
import productSaga from './product';
import artisanSaga from './artisan';
import artisansSaga from './artisans'

export default function* rootSaga() {
    yield all([
        productsSaga(),
        productSaga(),
        artisanSaga(),
        artisansSaga()
    ]);
}
