import * as actions from '../../../../../src/store/actions/product';

describe('Product Actions', () => {
    it('should return null if no details is found', () => {
        const data = null;
        const expectedAction = {
            type: actions.GET_PRODUCT_DETAILS,
            payload: data
        }
        expect(actions.getProductDetails(data)).toEqual(expectedAction);
    })
})