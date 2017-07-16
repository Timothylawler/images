const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
const fetch = require('node-fetch');

const authCheck = require('../../auth');

const user = express.Router();
user.use(bodyParser.urlencoded({
    extended: true
}));

user.use(bodyParser.json(), cors());

/*user.get("/info", authCheck, (req, res) => {
  //console.dir(req.headers['authorization']);
  fetch('https://timothy-karvonen.eu.auth0.com/userinfo',
    {headers: {'Authorization': req.headers['authorization']}})
    .then(resp => {
      res.end(JSON.stringify(resp));
      //console.log(res);
    })
    .catch(error => {
      console.log(error);
    })
  
});*/

/*  
 * Receive the current access token for the user with req.body.userId
 *  Enables checking which user is accessing the api
 */
user.post("/", authCheck, (req, res) => {
  //console.log(req.body);
  //  let userId = req.body.userId;
  //  let sessionAccessToken = req.body.accessToken;
  res.end();
});

/*  Gets the user with the access token from req.headers['authorization']
 */
user.get("/", authCheck, (req, res) => {
  let authorization = req.headers['authorization'];
  //console.log(authorization);
  setTimeout(()=>res.end(JSON.stringify(tempUser)), 1000);
})

module.exports = user;


let tempUser = {
  userName: "Tika",
  name: "Timothy Lawler Karvonen",
  id: "asdasd",
  bio: "Capturing colurful nature in south Africa. Making sure that every one sees the world as it is.",
  profileImage: "https://dncache-mauganscorp.netdna-ssl.com/thumbseg/325/325435-bigthumbnail.jpg",
  content: {
    count: 4,
    images: [
      {
        id: 1,
        text: "text",
        image: "https://dncache-mauganscorp.netdna-ssl.com/thumbseg/325/325435-bigthumbnail.jpg"
      },
      {
        id: 2,
        text: "text",
        image: "https://i.ytimg.com/vi/OdIJ2x3nxzQ/hqdefault.jpg"
      },
      {
        id: 3,
        text: "text",
        image: "https://us.123rf.com/450wm/ELEN/ELEN1511/ELEN151100020/49021765-winter-nature-scenery-of-woodland-in-sunny-day.jpg?ver=6"
      },
      {
        id: 4,
        text: "text",
        image: "https://i.ytimg.com/vi/OdIJ2x3nxzQ/hqdefault.jpg"
      },
    ]
  }
}
