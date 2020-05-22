import axios from 'axios';
import EventEmitter from '../utils/EventEmitter';
import systemConfig  from '../config/system';

class artisansService extends EventEmitter {
    constructor() {
        super();

        this.setDefaults();
    }

    setDefaults() {
        axios.defaults.headers.common['Content-type'] = 'application/json';
        axios.defaults.headers.common['Accept'] = 'application/json';
    }

    getAllArtisans({ page, limit, description_length }) {
        return new Promise((resolve, reject) => {
            axios
               .get(systemConfig.serverBaseUrl + '/artisans', {
                   params: {
                       page,
                       limit,
                       description_length
                   }
               })
               .then((response) => {
                   resolve(response.data);
               })
               .catch((error) => {
                   reject(error.response);
               })
        })
    }

    searchArtisans({ query_string, all_words, page, limit, description_length }) {
        return new Promise((resolve, reject) => {
            axios
               .get(systemConfig.serverBaseUrl + '/artisans/search', {
                   params: {
                       query_string,
                       all_words,
                       page,
                       limit,
                       description_length
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

    getArtisansInCategory({ category_id }) {
        return new Promise((resolve, reject) => {
            axios
              .get(systemConfig.serverBaseUrl + `artisans/inCategory/${category_id}`)
              .then((response) => {
                  resolve(response.data);
              })
              .catch((error) => {
                  reject(error.response);
              });
        });
    }
    getArtisansInField({ field_id }) {
        return new Promise((resolve, reject) => {
            axios
              .get(systemConfig.serverBaseUrl + `artisans/inField/${field_id}`)
              .then((response) => {
                  resolve(response.data);
              })
              .catch((error) => {
                  reject(error.response);
              });
        });
    }

    /** 
     * ----------------------------------------
     * The methods below are for an artisan
     * ---------------------------------------
     */

    getAnArtisanById({ artisan_id }) {
         return new Promise((resolve, reject) => {
             axios
               .get(systemConfig.serverBaseUrl + `artisans/${artisan_id}`)
               .then((response) => {
                   resolve(response.data);
               })
               .catch((error) => {
                   reject(error.response)
               });
         });
    }

    getAnArtisanDetails({ artisan_id }) {
        return new Promise((resolve, reject) => {
            axios
              .get(systemConfig.serverBaseUrl + `/artisans/${artisan_id}/locations`)
              .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                reject(error.response)
            });
        });
    }

    getAnArtisanReviews({ artisan_id })  {
        return new Promise((resolve, reject) => {
            axios
              .get(systemConfig.serverBaseUrl + `/artisans/${artisan_id}/reviews`)
              .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                reject(error.response)
            });
        });
    }

    createAnArtisanReview({ artisan_id , review, rating }) {
        return new Promise((resolve, reject) => {
            axios
              .post(systemConfig.serverBaseUrl + `/artisans/${artisan_id}/reviews`, {
                  review,
                  rating
              })
              .then((response) => {
                  resolve(response.data.user);
              })
              .catch((error) => {
                  reject(error.response);
              });
        });
    }

}

const instance = new artisansService();

export default instance;
