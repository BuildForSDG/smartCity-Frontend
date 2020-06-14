import {put, takeLatest, call} from 'redux-saga/effects';
import service from "../../../services/productsService";
import {
    POST_PRODUCT_REVIEW,
    POST_PRODUCT_REVIEW_SUCCESS,
    POST_PRODUCT_REVIEW_ERROR
}
    from "../../actions/alerts";

function* itemReviewSaga(action) {
    try {
        const data = yield call(service.createItemReview, action.payload);
        yield put({
            type: POST_PRODUCT_REVIEW_SUCCESS,
            payload: data
        });

    } catch (error) {
        yield put({
            type: POST_PRODUCT_REVIEW_ERROR, payload: error
        });
    }
}


export function* reviewWatcher() {
    yield takeLatest(POST_PRODUCT_REVIEW, itemReviewSaga);
}