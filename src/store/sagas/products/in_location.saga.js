import {put, takeLatest, call} from 'redux-saga/effects';
import productsService from "../../../services/productsService";
import {
    GET_LOCATION_PRODUCTS,
    GET_LOCATION_PRODUCTS_SUCCESS,
    GET_LOCATION_PRODUCTS_ERROR
}
    from "../../actions/products";

function* getLocationProductsSaga(action) {
    try {
        const data = yield call(productsService.getItemsInLocation, action.payload);
        yield put({
            type: GET_LOCATION_PRODUCTS_SUCCESS,
            payload: data
        });

    } catch (error) {
        yield put({
            type: GET_LOCATION_PRODUCTS_ERROR, payload: error
        });
    }
}


export function* getLocationProductsWatcher() {
    yield takeLatest(GET_LOCATION_PRODUCTS, getLocationProductsSaga);
}