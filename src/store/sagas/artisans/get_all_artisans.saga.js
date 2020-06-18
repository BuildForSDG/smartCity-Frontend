import {put, takeLatest, call} from 'redux-saga/effects';
import productsService from "../../../services/productsService";
import {
    GET_ALL_ARTISANS,
    GET_ALL_ARTISANS_SUCCESS,
    GET_ALL_ARTISANS_ERROR
}
    from "../../actions/artisans";

function* getAllArtisansSaga(action) {
    try {
        const data = yield call(productsService.getAllProducts, action.payload);
        yield put({
            type: GET_ALL_ARTISANS_SUCCESS,
            payload: data
        });

    } catch (error) {
        yield put({
            type: GET_ALL_ARTISANS_ERROR, payload: error
        });
    }
}


export function* getAllArtisansWatcher() {
    yield takeLatest(GET_ALL_ARTISANS, getAllArtisansSaga);
}