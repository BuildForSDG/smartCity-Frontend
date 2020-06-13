import {put, takeLatest, call} from 'redux-saga/effects';
import productsService from "../../../services/productsService";
import {
    GET_CATEGORY_ARTISANS,
    GET_CATEGORY_ARTISANS_SUCCESS,
    GET_CATEGORY_ARTISANS_ERROR
}
    from "../../actions/artisans";

function* getCategoryArtisansSaga(action) {
    try {
        const data = yield call(productsService.getItemsInCategory, action.payload);
        const { name } = action.payload
        console.log(name)
        yield put({
            type: GET_CATEGORY_ARTISANS_SUCCESS+name,
            payload: data
        });

    } catch (error) {
        yield put({
            type: GET_CATEGORY_ARTISANS_ERROR+name, payload: error
        });
    }
}


export function* getCategoryArtisansWatcher(name) {
    yield takeLatest(GET_CATEGORY_ARTISANS+name, getCategoryArtisansSaga);
}