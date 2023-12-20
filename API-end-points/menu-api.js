const express = require("express");
const router = express.Router();
const menuQueries = require("../db/queries/menu-items");

//get all menu items 
router.get("/", (req, res) => {
  menuQueries
    .getAllMenuItems()
    .then((items) => {
      res.json(items);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

//get menu item by id
router.get("/:id", (req, res) => {
  const menuItem = req.params.id;

  menuQueries
    .getMenuItem(menuItem)
    .then((item) => {
      res.json({ item });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});





module.exports = router;