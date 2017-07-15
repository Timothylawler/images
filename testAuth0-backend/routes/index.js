/*  Routes */
const first = require('./first/first');
const image = require('./image/image')
const user = require('./user/user');


const express = require("express");
const api = express.Router();

/*  Endpoints */
api.use("/first", first);
api.use("/image", image);
api.use("/user", user);


module.exports = api;