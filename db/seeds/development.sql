-- CUSTOMERS SEEDS
INSERT INTO customers (customerID, name, email_address, password)
VALUES
  (1, 'Mario', 'm@m.com', 'password'),
  (2, 'Yoshi', 'y@y.com', 'password'),
  (3, 'Bowser', 'b@b.com', 'password'),
  (4, 'Luigi', 'l@l.com', 'password');

-- MENU ITEMS SEEDS FIX FOOD IMAGE
INSERT INTO menuItems (menuItemID, name, description, price)
VALUES(1, 'Luigi''s Linguini', 'Fresh-made pasta in a Goomba cream sauce', 20000),
(2, 'Slippy Banana Splitty', 'Ripe banana with vanilla ice cream and a choco mountain', 15000),
(3, 'Toad''s Taters', 'Fried to crispy golden perfection', 4000),
(4, 'Bowser Burger', 'Makes you breathe fire like King Koopa', 24000),
(5, 'The Baby Bowser', 'A little less spice than the Bowser burger, but just as tasty!', 17000),
(6, 'Daisy''s Pancake Stack', 'Covered in whipped cream and golden syrup', 7800),
(7, 'Dry Bone''s Marrow', 'Parsley, capers, shallots', 40000),
(8, 'Stuffed Piranha Plant', 'Stuffed with fresh mushrooms and grilled until perfect', 34000),
(9, 'Item Box', 'Chef Luigi Mario cooks for you', 50000);


-- REVIEWS SEEDS
INSERT INTO reviews (reviewsID, userID, message, rating, date)
VALUES (1, 1, 'Wow! It''s the best restaurant in the Mushroom Kingdom!', 5, '2022-03-10T08:00:00.000Z'),
(2, 2, 'Amazing service! Perfect for a dino on the move like me', 5, '2023-02-12T08:00:00.000Z'),
(3, 3, 'The burger is WAY too spicy! And I think the owner has ties to the mob!', 1, '2022-12-12T08:00:00.000Z');

-- CART SEEDS
INSERT INTO cart (cartID, userID, menuItemID, quantity, date)
VALUES(1, 2, 3, 4, '2022-12-12T08:00:00.000Z'),
  (2, 4, 5, 6, '2022-03-10T08:00:00.000Z');

-- ORDERS SEEDS
INSERT INTO orders(orderID, userID, total, status, date)
VALUES(1, 2, 50000, 'processing', '2022-03-10T08:00:00.000Z'), (2, 3, 40000, 'completed', '2023-02-12T08:00:00.000Z');

-- ORDER ITEMS SEEDS
INSERT INTO orderItems(orderItemID, orderID, menuItemID, quantity) 
VALUES(1, 1, 9, 2);