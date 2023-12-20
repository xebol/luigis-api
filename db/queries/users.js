const client = require("../connection");

//get all users
const allUsers = () => {
  return client
    .query("SELECT * FROM customers")
    .then((customers) => {
      return customers.rows;
    })
    .catch((err) => {
      console.log(err);
    });
};

//add a user to db/register a user
const registerCustomer = (customer) => {
  const {name, email_address, password} = customer
  return client
    .query(
      "INSERT INTO customers (name, email_address, password) VALUES($1, $2, $3) RETURNING *",
      [name, email_address, password]
    )
    .then((customer) => {
      return customer.rows[0];
    })
    .catch((err) => {
      console.error(err);
    });
};

//get customer by id
const getCustomerByID = (id) => {
  return client
    .query("SELECT name, email_address FROM customers WHERE customerID = $1 ;", [id])
    .then((customer) => {
      return customer.rows[0];
    })
    .catch((err) => {
      console.error(err);
    });
};

//customer login
const customerLogin = (email_address, password) => {

  return client
    .query("SELECT name FROM customers WHERE email_address = $1 AND password = $2;", [email_address, password])
    .then((customer) => {
      return customer.rows[0];
    })
    .catch((err) => {
      console.error(err);
    });
};




module.exports = {
  registerCustomer,
  getCustomerByID,
  customerLogin,
  allUsers
};