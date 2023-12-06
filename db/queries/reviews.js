const client = require("../connection");

//get all reviews
const getAllReviews = () => {
  return client
    .query("SELECT * FROM reviews")
    .then((reviews) => {
      return reviews.rows[0];
    })
    .catch((err) => {
      console.error(err);
    });
};

//add a review
const addReview = (customerID, review) => {
  return client
    .query("INSERT INTO reviews (userID, message, rating) VALUES ($1, $2, $3) RETURNING *", [customerID, review.message, review.rating])
    .then((review) => {
      return review.rows[0];
    })
    .catch((err) => {
      console.error(err);
    });
};



module.exports = {
  getAllReviews, addReview
};