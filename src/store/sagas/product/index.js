import { all } from 'redux-saga/effects';
import { getSingleProductWatcher } from './single_product.saga';
import { getProductDetailsWatcher } from './product_details.saga';

export default function* productsSaga() {
    yield all([
        getSingleProductWatcher(),
        getProductDetailsWatcher()
    ]);
}