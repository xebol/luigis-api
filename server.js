require('dotenv').config();

const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const morgan = require('morgan');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8000;


app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());


const customerRouter = require("./API-end-points/users-api");
const menuItemsRouter = require("./API-end-points/menu-api");
const reviewsRouter = require("./API-end-points/reviews-api");



app.use("/customers", customerRouter);
app.use("/menu", menuItemsRouter);
app.use("/reviews", reviewsRouter);





server.listen(PORT, (err) => {
  if (err) console.error("Error message: ", err);
  console.log(`Server is listening on ${PORT}`);
});