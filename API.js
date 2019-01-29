import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getMatches: function() {
    return axios.get(//matches);
  },
  getUserInfo: function(breed) {
    return axios.get(//user info);
  },
  getComments: function() {
    return axios.get(//comments)
  }
};
