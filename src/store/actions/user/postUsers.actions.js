export const POST_USERS = 'POST_USERS';
export const POST_USERS_ERROR = 'POST_USERS_ERROR';
export const POST_USERS_SUCCESS = 'POST_USERS_SUCCESS';

export const postUsers = (data) => ({
  type: POST_USERS,
  payload: data
});

// data = {type: String, user: Object}
