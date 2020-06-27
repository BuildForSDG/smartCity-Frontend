export const GET_USERS = 'GET_USERS';
export const GET_USERS_ERROR = 'GET_USERS_ERROR';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';

export const getUsers = (type) => ({
  type: GET_USERS,
  payload: { type }
});