const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");

const authCheck = require('../../auth');

const second = express.Router();
second.use(bodyParser.urlencoded({
    extended: true
}));
second.use(bodyParser.json(), cors());

second.get("/", authCheck, (req, res) => {
    res.end(JSON.stringify(data));
});

module.exports = second;

let data = [
    {
        id: 21,
        text: "first second entry"
    },
    {
        id: 22,
        text: "second second entry"
    },
    {
        id: 23,
        text: "third second entry"
    },
    {
        id: 24,
        text: "fourth second entry"
    },
    {
        id: 25,
        text: "fifth second entry"
    },
];