export const GET_LOCATION_PRODUCTS = 'GET_LOCATION_PRODUCTS';
export const GET_LOCATION_PRODUCTS_ERROR = 'GET_LOCATION_PRODUCTS_ERROR';
export const GET_LOCATION_PRODUCTS_SUCCESS = 'GET_LOCATION_PRODUCTS_SUCCESS';


export const getLocationProducts = (data) => ({
    type: GET_LOCATION_PRODUCTS+data.name,
    payload: data
});
