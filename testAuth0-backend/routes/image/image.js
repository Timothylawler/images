const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");

const authCheck = require('../../auth');

const image = express.Router();
image.use(bodyParser.urlencoded({
    extended: true
}));
image.use(bodyParser.json(), cors());

/*  GET ALL */
image.get("/", authCheck, (req, res) => {
    res.end(JSON.stringify(data));
});
image.get("/:id", (req, res) => {
    let image = data.filter((item, index) => {
        return item.id == req.params.id;
    });
    if(image){
        res.end(JSON.stringify(image[0]));
    }
    else {
        res.status(404).send();
    }
});

module.exports = image;

let data = [
    {
        id: 21,
        text: "first second entry",
        image: "https://dncache-mauganscorp.netdna-ssl.com/thumbseg/325/325435-bigthumbnail.jpg"
    },
    {
        id: 22,
        text: "second second entry",
        image: "https://i.ytimg.com/vi/OdIJ2x3nxzQ/hqdefault.jpg"
    },
    {
        id: 23,
        text: "third second entry",
        image: "https://dncache-mauganscorp.netdna-ssl.com/thumbseg/325/325435-bigthumbnail.jpg"        
    },
    {
        id: 24,
        text: "fourth second entry",
        image: "https://us.123rf.com/450wm/ELEN/ELEN1511/ELEN151100020/49021765-winter-nature-scenery-of-woodland-in-sunny-day.jpg?ver=6"
    },
    {
        id: 25,
        text: "fifth second entry",
        image: "https://i.ytimg.com/vi/OdIJ2x3nxzQ/hqdefault.jpg"
    },
    {
        id: 26,
        text: "first second entry",
        image: "https://dncache-mauganscorp.netdna-ssl.com/thumbseg/325/325435-bigthumbnail.jpg"
    },
    {
        id: 27,
        text: "second second entry",
        image: "https://i.ytimg.com/vi/OdIJ2x3nxzQ/hqdefault.jpg"
    },
    {
        id: 28,
        text: "third second entry",
        image: "https://dncache-mauganscorp.netdna-ssl.com/thumbseg/325/325435-bigthumbnail.jpg"        
    },
    {
        id: 29,
        text: "fourth second entry",
        image: "https://us.123rf.com/450wm/ELEN/ELEN1511/ELEN151100020/49021765-winter-nature-scenery-of-woodland-in-sunny-day.jpg?ver=6"
    },
    {
        id: 30,
        text: "fifth second entry",
        image: "https://i.ytimg.com/vi/OdIJ2x3nxzQ/hqdefault.jpg"
    },
    {
        id: 31,
        text: "first second entry",
        image: "https://dncache-mauganscorp.netdna-ssl.com/thumbseg/325/325435-bigthumbnail.jpg"
    },
    {
        id: 32,
        text: "second second entry",
        image: "https://i.ytimg.com/vi/OdIJ2x3nxzQ/hqdefault.jpg"
    },
    {
        id: 33,
        text: "third second entry",
        image: "https://dncache-mauganscorp.netdna-ssl.com/thumbseg/325/325435-bigthumbnail.jpg"        
    },
    {
        id: 34,
        text: "fourth second entry",
        image: "https://us.123rf.com/450wm/ELEN/ELEN1511/ELEN151100020/49021765-winter-nature-scenery-of-woodland-in-sunny-day.jpg?ver=6"
    },
    {
        id: 35,
        text: "fifth second entry",
        image: "https://i.ytimg.com/vi/OdIJ2x3nxzQ/hqdefault.jpg"
    },
    {
        id: 36,
        text: "first second entry",
        image: "https://dncache-mauganscorp.netdna-ssl.com/thumbseg/325/325435-bigthumbnail.jpg"
    },
    {
        id: 37,
        text: "second second entry",
        image: "https://i.ytimg.com/vi/OdIJ2x3nxzQ/hqdefault.jpg"
    },
    {
        id: 38,
        text: "third second entry",
        image: "https://dncache-mauganscorp.netdna-ssl.com/thumbseg/325/325435-bigthumbnail.jpg"        
    },
    {
        id: 39,
        text: "fourth second entry",
        image: "https://us.123rf.com/450wm/ELEN/ELEN1511/ELEN151100020/49021765-winter-nature-scenery-of-woodland-in-sunny-day.jpg?ver=6"
    },
    {
        id: 40,
        text: "fifth second entry",
        image: "https://i.ytimg.com/vi/OdIJ2x3nxzQ/hqdefault.jpg"
    },
];