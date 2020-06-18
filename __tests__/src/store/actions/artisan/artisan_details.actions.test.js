import * as actions from '../../../../../src/store/actions/artisan';

describe('Artisan Details action', () => {
    
    it('should retun null if no artisan detail is found', () => {
        const data = null;
        const expectedAction = {
            type: actions.GET_AN_ARTISAN_DETAILS,
            payload: data
        };
        expect(actions.getAnArtisanDetails(data)).toEqual(expectedAction)
    });

})