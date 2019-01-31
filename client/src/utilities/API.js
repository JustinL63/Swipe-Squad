import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getMatches: function() {
    return axios.get();
  },
  getUserInfo: function(breed) {
    return axios.get();
  },
  getComments: function() {
    return axios.get();
  }
};
