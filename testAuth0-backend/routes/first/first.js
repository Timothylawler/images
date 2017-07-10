const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");

const first = express.Router();
first.use(bodyParser.urlencoded({
    extended: true
}));
first.use(bodyParser.json(), cors());

first.get("/", (req, res) => {
    res.end(JSON.stringify(data));
});

module.exports = first;

let data = [
    {
        id: 1,
        text: "first entry"
    },
    {
        id: 2,
        text: "second entry"
    },
    {
        id: 3,
        text: "third entry"
    },
    {
        id: 4,
        text: "fourth entry"
    },
    {
        id: 5,
        text: "fifth entry"
    },
];