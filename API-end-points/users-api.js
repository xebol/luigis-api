const express = require("express");
const router = express.Router();
const customerQueries = require("../db/queries/users");

// get all users
router.get("/", (req, res) => {
  customerQueries
    .allUsers()
    .then((customers) => {
      res.json(customers);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

//register a user
router.post("/", (req, res) => {
  const newCustomer = req.body;

  //check if all the neccessary credentials are met
  if (!newCustomer || !newCustomer.email_address || !newCustomer.password) {
    return res.status(400).json({ error: "Invalid input. Please provide email_address, and password." });
  }

  customerQueries
    .registerCustomer(newCustomer)
    .then((customer) => {
      res.status(201).send(customer);
    })
    .catch((err) => {
      console.error("Error registering customer:", err);
      res.status(500).json({ error: "Internal Server Error" });
    });
});


//when a customer logs in
router.post("/", (req, res) => {
  const { email_address, password } = req.body;

  customerQueries
    .customerLogin(email_address, password)
    .then((loggedInUser) => {
      //if a user is already registered
      if (loggedInUser) {
        res.status(200).json({ message: "Login successful", user: loggedInUser });
      } else {
        //if not registered
        res.status(401).json({ message: "User not found" });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});


//get customer by id
router.get("/:id", (req, res) => {
  const customerID = req.params.id;

  customerQueries
    .getCustomerByID(customerID)
    .then((customer) => {
      res.json({ customer });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});



module.exports = router;