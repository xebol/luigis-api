const express = require("express");
const router = express.Router();
router.use(express.json());

const customerQueries = require("../db/queries/users");


//register a user
router.post("/", (req, res) => {
  const newCustomer = req.body;

  customerQueries
    .registerCustomer(newCustomer)
    .then((customer) => {
      res.send(customer);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

//when a customer logs in
router.post("/login ", (req, res) => {
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