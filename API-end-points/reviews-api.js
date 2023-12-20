const express = require("express");
const router = express.Router();
const reviewQueries = require("../db/queries/reviews");


//get all reviews
router.get("/", (req, res) => {
  reviewQueries
    .getAllReviews()
    .then((reviews) => {
      console.log("Retrieved reviews:", reviews);
      res.json(reviews);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: err.message });
    });
});


//add a review
router.post("/", (req, res) => {
  const newReview = req.body;
  const customer = req.params.id;

  reviewQueries
    .addReview(customer, newReview)
    .then((review) => {
      res.status(201).send(review);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});


module.exports = router;