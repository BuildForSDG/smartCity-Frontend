export const GET_ALL_ARTISANS = 'GET_ALL_ARTISANS';
export const GET_ALL_ARTISANS_ERROR = 'GET_ALL_ARTISANS_ERROR';
export const GET_ALL_ARTISANS_SUCCESS = 'GET_ALL_ARTISANS_SUCCESS';


export const getAllArtisans = (data) => ({
    type: GET_ALL_ARTISANS,
    payload: data
});
