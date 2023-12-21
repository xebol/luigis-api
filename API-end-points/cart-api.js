const express = require("express");
const router = express.Router();
const cartQueries = require("../db/queries/cart");


//get all menu items in cart
router.get("/", (req, res) => {
  cartQueries
    .getAllMenuItemsInCart()
    .then((items) => {
      res.json(items);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: err.message });
    });
});

//add menu item to cart by id
router.post("/", (req, res) => {
  const { userID, quantity, item } = req.body;

  cartQueries
    .addItemToCart(userID, item, quantity)
    .then((itemAdded) => {
      res.status(201).send(itemAdded);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

//remove item from cart
router.delete("/:id", (req, res) => {
  const menuItem = req.params.id;

  cartQueries
    .removeItem(menuItem)
    .then((itemRemoved) => {
      res.status(201).send(itemRemoved);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});





module.exports = router;

