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
})

module.exports = user;
