//Create web server using Express
const express = require("express");
const app = express();

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false}));