import axios from 'axios';
import EventEmitter from '../utils/EventEmitter';
import systemConfig from '../config/system';

class userService extends EventEmitter {
  constructor() {
    super();

    this.setDefaults();
  }

  setDefaults() {
    axios.defaults.headers.common['Content-Type'] = 'application/json';
    axios.defaults.headers.common['Accept'] = 'application/json';
  }

  postUser({ type, user }) {
    return new Promise((resolve, reject) => {
      axios
        .post(systemConfig.userBaseUrl + `/${type}`, {
          ...user
        })
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.response.data);
        });
    });
  }

  getUser(url) {
    return new Promise((resolve, reject) => {
      axios
        .get(url)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.response.data);
        });
    });
  }

  /* login(user) {
    return new Promise((resolve, reject) => {
      axios
        .post(systemConfig.userBaseUrl + '/login', {
          ...user
        })
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.response.data);
        });
    });
  } */
}

const instance = new userService();

export default instance;
