import { put, takeLatest, call } from 'redux-saga/effects';
import artisansServices from '../../../services/artisansServices';
import {
    GET_AN_ARTISAN_DETAILS,
    GET_AN_ARTISAN_DETAILS_ERROR,
    GET_AN_ARTISAN_DETAILS_SUCCESS
} from '../../actions/artisan';


function* artisanDetailsSaga(action) {
    try {
        const data = yield call(artisansServices.getAnArtisanDetails, action.payload);
        yield put({
            type: GET_AN_ARTISAN_DETAILS_SUCCESS,
            payload: data
        });
    } catch(error) {
        yield put({
            type: GET_AN_ARTISAN_DETAILS_ERROR,  payload: error
        });
    }
}

export function* getAnArtisanDetailsWatcher() {
    yield takeLatest(GET_AN_ARTISAN_DETAILS, artisanDetailsSaga);
}
