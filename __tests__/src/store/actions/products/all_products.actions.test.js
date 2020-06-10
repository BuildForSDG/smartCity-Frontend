import * as actions from '../../../../../src/store/actions/products';


describe('Products Actions', () => {

    it('should return empty object if there is no product', () => {
        const data = {};
        const expectedAction = {
            type: actions.GET_ALL_PRODUCTS,
            payload: data
        };
        expect(actions.getAllProducts(data)).toEqual(expectedAction)
    });

    it('should return all products from database', () => {
        const data = {
            description: 'This jeans is suitable for child',
            name: 'Blue Jean',
            price: 47
        };
        const expectedAction = {
            type: actions.GET_ALL_PRODUCTS,
            payload: data
        };
        expect(actions.getAllProducts(data)).toEqual(expectedAction)
    })

})