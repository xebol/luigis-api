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
    .query("DELETE FROM cart WHERE menuItemID = $1", [menuItemID])
    .then((cart) => {
      return cart.rows[0];
    })
    .catch((err) => {
      console.error(err);
    });
};




module.exports = {
  addItemToCart, removeItem
}