import { all } from 'redux-saga/effects';
import { getAllProductsWatcher } from './get_all_products.saga';
import {getLocationProductsWatcher} from './in_location.saga';
import { getCategoryProductsWatcher } from './in_category.saga'

export default function* productsSaga() {
    yield all([
        getAllProductsWatcher(),
        getLocationProductsWatcher(),
        getCategoryProductsWatcher('fruits'),
        getCategoryProductsWatcher('vegetables'),
        getCategoryProductsWatcher('snacks'),
        getCategoryProductsWatcher('frozen'),
        getCategoryProductsWatcher('lunch'),
        getCategoryProductsWatcher('cakes')
    ]);
}