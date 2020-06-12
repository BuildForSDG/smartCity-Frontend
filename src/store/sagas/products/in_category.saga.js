import {put, takeLatest, call} from 'redux-saga/effects';
import productsService from "../../../services/productsService";
import {
    GET_CATEGORY_PRODUCTS,
    GET_CATEGORY_PRODUCTS_SUCCESS,
    GET_CATEGORY_PRODUCTS_ERROR
}
    from "../../actions/products";

function* getCategoryProductsSaga(action) {
    try {
        const data = yield call(productsService.getItemsInCategory, action.payload);
        const { name } = action.payload
        console.log(name)
        yield put({
            type: GET_CATEGORY_PRODUCTS_SUCCESS+name,
            payload: data
        });

    } catch (error) {
        yield put({
            type: GET_CATEGORY_PRODUCTS_ERROR+name, payload: error
        });
    }
}


export function* getCategoryProductsWatcher(name) {
    yield takeLatest(GET_CATEGORY_PRODUCTS+name, getCategoryProductsSaga);
}