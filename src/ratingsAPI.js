const { RESTDataSource } = require("apollo-datasource-rest");
class RatingsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://jokes-api-by-harshit-chhipa.herokuapp.com/";
  }
  async getRating(id) {
    return this.get(`ratings/${id}`);
  }

  async getRatings() {
    return this.get("ratings");
  }
  async postRating(ratingContent) {
    return this.post("ratings", ratingContent);
  }

  async replaceRating(rating) {
    return this.put("ratings", rating);
  }

  async updateRating(rating) {
    return this.post("ratings", { id: rating.id, rating });
  }

  async deleteRating(id) {
    return this.delete(`ratings/${id}`);
  }
}

module.exports = RatingsAPI;
