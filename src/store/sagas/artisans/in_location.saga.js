import {put, takeLatest, call} from 'redux-saga/effects';
import productsService from "../../../services/productsService";
import {
    GET_LOCATION_ARTISANS,
    GET_LOCATION_ARTISANS_SUCCESS,
    GET_LOCATION_ARTISANS_ERROR
}
    from "../../actions/artisans";

function* getLocationArtisansSaga(action) {
    try {
        const data = yield call(productsService.getItemsInLocation, action.payload);
        const { name } = action.payload
        yield put({
            type: GET_LOCATION_ARTISANS_SUCCESS+name,
            payload: data
        });

    } catch (error) {
        yield put({
            type: GET_LOCATION_ARTISANS_ERROR+name, payload: error
        });
    }
}


export function* getLocationArtisansWatcher(name) {
    yield takeLatest(GET_LOCATION_ARTISANS+name, getLocationArtisansSaga);
}