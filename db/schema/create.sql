DROP TABLE IF EXISTS customers CASCADE;
DROP TABLE IF EXISTS menuItems CASCADE;
DROP TABLE IF EXISTS reviews CASCADE;
DROP TABLE IF EXISTS cart CASCADE;
DROP TABLE IF EXISTS orders CASCADE;
DROP TABLE IF EXISTS orderItems CASCADE;

-- customers table
CREATE TABLE customers (
  customerID SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  email_address TEXT NOT NULL,
  password VARCHAR(255) NOT NULL
);

-- menu items table
CREATE TABLE menuitems (
  menuItemID SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  price INTEGER NOT NULL
);

-- reviews table
CREATE TABLE reviews (
  reviewsID SERIAL PRIMARY KEY,
  userID INTEGER REFERENCES customers(customerID) ON DELETE CASCADE,
  message TEXT NOT NULL,
  rating INTEGER NOT NULL
);

-- cart table
CREATE TABLE cart (
  cartID SERIAL PRIMARY KEY,
  userID INTEGER REFERENCES customers(customerID),
  menuItemID INTEGER REFERENCES menuItems(menuItemID),
  quantity INTEGER NOT NULL
);

-- orders table
CREATE TABLE orders (
  orderID SERIAL PRIMARY KEY,
  userID INTEGER REFERENCES customers(customerID),
  total INTEGER NOT NULL,
  status VARCHAR(255) NOT NULL
);

-- orderItems
CREATE TABLE orderitems (
  orderItemID SERIAL PRIMARY KEY,
  orderID INTEGER REFERENCES orders(orderID),
  menuItemID INTEGER REFERENCES menuItems(menuItemID),
  quantity INTEGER NOT NULL
);