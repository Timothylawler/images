/*  Routes */
const first = require('./first/first');
const second = require('./second/second')
const user = require('./user/user');


const express = require("express");
const api = express.Router();

/*  Endpoints */
api.use("/first", first);
api.use("/second", second);
api.use("/user", user);


module.exports = api;