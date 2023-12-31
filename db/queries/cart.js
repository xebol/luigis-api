const client = require("../connection");

//add menu item to cart
const addItemToCart = (userID, menuItemID, quantity) => {
  return client
    .query("INSERT INTO cart (userID, menuItemID, quantity) VALUES ($1, $2, $3) RETURNING *", [userID, menuItemID, quantity])
    .then((item) => {
      return item.rows[0];
    })
    .catch((err) => {
      console.error(err);
    });
};

//remove menu item from cart
const removeItem = (menuItemID) => {
  return client
    .query("DELETE FROM cart WHERE cartID = $1; menuItemID = $2", [menuItemID])
    .then((cart) => {
      return cart.rows[0];
    })
    .catch((err) => {
      console.error(err);
    });
};

//get all items from cart
const getAllMenuItemsInCart = () => {
  return client
    .query("SELECT * FROM cart")
    .then((items) => {
      return items.rows;
    })
    .catch((err) => {
      console.error(err);
    });
};

module.exports = {
  addItemToCart, 
  removeItem, 
  getAllMenuItemsInCart
};