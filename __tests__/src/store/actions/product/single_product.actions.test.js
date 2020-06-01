import * as actions from '../../../../../src/store/actions/product';

describe('Single Product', () => {

    it('should return no product if no product is available', () => {
        const data = {};
        const expectedAction = {
            type: actions.GET_SINGLE_PRODUCT,
            payload: data
        };
        expect(actions.getSingleProduct(data)).toEqual(expectedAction);
    });

    it('should return product when there is an product', () => {
        const data = {
            description: 'This casual wear is unisex',
            name: 'John Doe',
            price: 400,
            title: 'Unisex top'
        };
        const expectedAction = {
            type: actions.GET_SINGLE_PRODUCT,
            payload: data
        }
        expect(actions.getSingleProduct(data)).toEqual(expectedAction)
    });

});