import * as actions from '../../../../../src/store/actions/artisans';

describe('Artisans Actions', () => {

    it('should return empty object if there are no artisans ', () => {
        const data = {};
        const expectedAction = {
            type: actions.GET_ALL_ARTISANS,
            payload: data
        };
        expect(actions.getAllArtisans(data)).toEqual(expectedAction)
    });

    it('should return artisans if any exist', () => {
        const data = [
            {
                description: 'The best vulcanizer',
                name: 'John Doe',
                price: 400,
                title: 'Real Vulcanizer'
            },
            {
                description: 'The hitman of the game',
                name: 'John Wick',
                price: 4000,
                title: 'Big boss'
            }
        ];
        const expectedAction = {
            type: actions.GET_ALL_ARTISANS,
            payload: data
        };
        expect(actions.getAllArtisans(data)).toEqual(expectedAction)
    });

});