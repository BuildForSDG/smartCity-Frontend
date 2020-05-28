export const GET_AN_ARTISAN = "GET_AN_ARTISAN";
export const GET_AN_ARTISAN_ERROR = "GET_AN_ARTISAN_ERROR";
export const GET_AN_ARTISAN_SUCCESS = "GET_AN_ARTISAN_SUCCESS";


export const getAnArtisan = (data) => ({
    type: GET_AN_ARTISAN,
    payload: data
});
