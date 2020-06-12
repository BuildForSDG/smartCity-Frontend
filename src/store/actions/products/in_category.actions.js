export const GET_CATEGORY_PRODUCTS = 'GET_CATEGORY_PRODUCTS';
export const GET_CATEGORY_PRODUCTS_ERROR = 'GET_CATEGORY_PRODUCTS_ERROR';
export const GET_CATEGORY_PRODUCTS_SUCCESS = 'GET_CATEGORY_PRODUCTS_SUCCESS';

export const getCategoryProducts = (data) => ({
  type: GET_CATEGORY_PRODUCTS + data.name,
  payload: data
});
