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
        const { name } = action.payload
        yield put({
            type: GET_LOCATION_PRODUCTS_SUCCESS+name,
            payload: data
        });

    } catch (error) {
        yield put({
            type: GET_LOCATION_PRODUCTS_ERROR+name, payload: error
        });
    }
}


export function* getLocationProductsWatcher(name) {
    yield takeLatest(GET_LOCATION_PRODUCTS+name, getLocationProductsSaga);
}