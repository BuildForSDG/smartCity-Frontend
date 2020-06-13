export const GET_LOCATION_ARTISANS = 'GET_LOCATION_ARTISANS';
export const GET_LOCATION_ARTISANS_ERROR = 'GET_LOCATION_ARTISANS_ERROR';
export const GET_LOCATION_ARTISANS_SUCCESS = 'GET_LOCATION_ARTISANS_SUCCESS';


export const getLocationArtisans = (data) => ({
    type: GET_LOCATION_ARTISANS+data.name,
    payload: data
});
