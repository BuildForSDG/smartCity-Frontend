import { put, takeLatest, call } from 'redux-saga/effects';
import artisansServices from '../../../services/artisansServices';
import { 
    GET_AN_ARTISAN,
    GET_AN_ARTISAN_SUCCESS,
    GET_AN_ARTISAN_ERROR
} from '../../actions/artisan';

function* anArtisanSaga(action) {
    try {
        const data = yield call(artisansServices.getAnArtisanById, action.payload);
        yield put({
            type: GET_AN_ARTISAN_SUCCESS,
            payload: data
        });
    } catch (error) {
        yield put({
            type: GET_AN_ARTISAN_ERROR,
            payload: error
        })
    }
}

export function* getAnArtisanWatcher() {
    yield takeLatest(GET_AN_ARTISAN, anArtisanSaga)
}
