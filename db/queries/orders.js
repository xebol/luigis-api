const e = require("express");
const client = require("../connection");

//add items to order
const addItemsToOrder = (orderID, menuItemID, quantity) => {
  return client
    .query("INSERT INTO orderitems (orderID, menuItemID, quantity) VALUES ($1, $2, $3) RETURNING *", [orderID, menuItemID, quantity])
    .then((order) => {
      return order.rows[0];
    })
    .catch((err) => {
      console.error(err);
    });
};

//place an order
const placeOrder = (userID, total, status) => {
  return client
    .query("INSERT INTO orders (userID, total, status) VALUES ($1, $2, $3) RETURNING *", [userID, total, status])
    .then((order) => {
      return order.rows[0];
    })
    .catch((err) => {
      console.error(err);
    });
};

//retrieve all order history for a user 
const customerOrderHistory = (userID) => {
  return client
    .query("SELECT * FROM orders WHERE usedID = $1;", [userID])
    .then((orders) => {
      return orders.rows;
    })
    .catch((err) => {
      console.error(err);
    });
};

//retrieve all items in an order 
const allItems = (orderID) => {
  return client
    .query("SELECT * FROM orderitems WHERE orderID = $1;", [orderID])
    .then((order) => {
      return order.rows[0];
    })
    .catch((err) => {
      console.error(err);
    });
};


module.exports = {
  addItemsToOrder, placeOrder, customerOrderHistory, allItems
};