const client = require("../connection");

//get all menu items
const getAllMenuItems = () => {
  return client
    .query("SELECT * FROM menuitems")
    .then((menuItems) => {
      return menuItems.rows;
    })
    .catch((err) => {
      console.error(err);
    });
};


//get menuItem by ID
const getMenuItem = (id) => {
  return client
    .query("SELECT * FROM menuitems WHERE menuItemID = $1;", [id])
    .then((menuItem) => {
      return menuItem.rows[0];
    })
    .catch((err) => {
      console.error(err);
    });
};


module.exports = {
  getAllMenuItems,
  getMenuItem
};