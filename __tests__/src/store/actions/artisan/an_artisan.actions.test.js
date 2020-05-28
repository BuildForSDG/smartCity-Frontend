import * as actions from '../../../../../src/store/actions';

describe('Artisan actions', () => {

    it('should return no artisan when artisan data is empty', () => {
        const data = {};
        const expectedAction = {
            type: actions.GET_AN_ARTISAN,
            payload: data
        }
        expect(actions.getAnArtisan(data)).toEqual(expectedAction)
    });

    it('should return artisan when there is an artisan', () => {
        const data = {
            description: 'The best vulcanizer',
            name: 'John Doe',
            price: 400,
            title: 'Real Vulcanizer'
        };
        const expectedAction = {
            type: actions.GET_AN_ARTISAN,
            payload: data
        }
        expect(actions.getAnArtisan(data)).toEqual(expectedAction)
    });

});