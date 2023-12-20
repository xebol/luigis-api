require('dotenv').config();

const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const morgan = require('morgan');
const bodyParser = require('body-parser');
const PORT = process.env.port || 8000;


app.use(morgan('combined'));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());


const customerApiRoutes = require("./API-end-points/users-api");




app.use("/api/customers", customerApiRoutes);







server.listen(PORT, (err) => {
  if (err) console.error("Error message: ", err);
  console.log(`Server is listening on ${PORT}`);
});