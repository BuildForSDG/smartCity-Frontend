export const GET_AN_ARTISAN_DETAILS = "GET_AN_ARTISAN_DETAILS";
export const GET_AN_ARTISAN_DETAILS_ERROR = "GET_AN_ARTISAN_DETAILS_ERROR";
export const GET_AN_ARTISAN_DETAILS_SUCCESS = "GET_AN_ARTISAN_DETAILS_SUCCESS";

export const getAnArtisanDetails = (data) => ({
    type: GET_AN_ARTISAN_DETAILS,
    payload: data
});
