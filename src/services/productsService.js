import axios from 'axios';
import EventEmitter from '../utils/EventEmitter';
import systemConfig from '../config/system';

class productsService extends EventEmitter {
  constructor() {
    super();

    this.setDefaults();
  }

  setDefaults() {
    axios.defaults.headers.common['Content-Type'] = 'application/json';
    axios.defaults.headers.common['Accept'] = 'application/json';
  }

  getAllProducts({ type, limit }) {
    return new Promise((resolve, reject) => {
      axios
        .get(systemConfig.serverBaseUrl + `/${type}`, {
          params: {
            limit
          }
        })
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.response);
        });
    });
  }

  getItemsInCategory({ type, categoryId, limit }) {
    return new Promise((resolve, reject) => {
      axios
        .get(systemConfig.serverBaseUrl + `/${type}/inCategory/${categoryId}`, {
          params: {
            limit
          }
        })
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.response);
        });
    });
  }

  getItemsInLocation({ type, location, limit }) {
    return new Promise((resolve, reject) => {
      axios
        .get(systemConfig.serverBaseUrl + `/${type}/inLocation/${location}`, {
          params: {
            limit
          }
        })
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.response);
        });
    });
  }

  getItemsInCategoryAndLocation({ type, categoryId, location }) {
    return new Promise((resolve, reject) => {
      axios
        .get(systemConfig.serverBaseUrl + `/${type}/inCategory/${categoryId}/inLocation/${location}`)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.response);
        });
    });
  }

  getProductsInRange({ from, to, limit }) {
    return new Promise((resolve, reject) => {
      axios
        .get(systemConfig.serverBaseUrl + `/products/inRange/${from}-${to}`, {
          params: {
            limit
          }
        })
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.response);
        });
    });
  }

  searchItems({ type, queryString, limit }) {
    return new Promise((resolve, reject) => {
      axios
        .get(systemConfig.serverBaseUrl + `/${type}/search`, {
          params: {
            queryString,
            limit
          }
        })
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.response);
        });
    });
  }

  /* ---------------------------------------------- */
  /* The Following Methods are for a single Items */
  /* ---------------------------------------------- */

  getItemById({ type, id }) {
    return new Promise((resolve, reject) => {
      axios
        .get(systemConfig.serverBaseUrl + `/${type}/${id}`)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.response);
        });
    });
  }

  getItemReviews({ type, id }) {
    return new Promise((resolve, reject) => {
      axios
        .get(systemConfig.serverBaseUrl + `/${type}/${id}/reviews`)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.response);
        });
    });
  }

  createItemReview({ type, id, review }) {
    return new Promise((resolve, reject) => {
      axios
        .post(systemConfig.serverBaseUrl + `/${type}/${id}/reviews`, {
          ...review
        })
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.response);
        });
    });
  }
}

const instance = new productsService();

export default instance;
