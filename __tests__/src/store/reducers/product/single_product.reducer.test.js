import singleProductReducer from '../../../../../src/store/reducers/product/single_product.reducer';
import * as singleProductActions from '../../../../../src/store/actions/product/single_product.actions';

const initialState = {
    data: {},
    isLoading: false,
    error: false
};

describe('SINGLE PRODUCT REDUCER', () => {

    test('should return the initial state', () => {
        expect(singleProductReducer({}, {})).toEqual({})
    });

    it('should return initial state', () => {
    expect(singleProductReducer(initialState, {})).toEqual(initialState)
    });

    it('should return isLoding', () => {
        expect(
            singleProductReducer(initialState, {
                type: singleProductActions.GET_SINGLE_PRODUCT
            })
        )
    })

})