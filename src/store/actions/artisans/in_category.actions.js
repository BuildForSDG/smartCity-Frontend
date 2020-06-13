export const GET_CATEGORY_ARTISANS = 'GET_CATEGORY_ARTISANS';
export const GET_CATEGORY_ARTISANS_ERROR = 'GET_CATEGORY_ARTISANS_ERROR';
export const GET_CATEGORY_ARTISANS_SUCCESS = 'GET_CATEGORY_ARTISANS_SUCCESS';

export const getCategoryArtisans = (data) => ({
  type: GET_CATEGORY_ARTISANS + data.name,
  payload: data
});
