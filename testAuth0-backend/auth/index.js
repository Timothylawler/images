var jwt = require('express-jwt');
var jwks = require('jwks-rsa');

let JWKSURI = require('./conf').JWKSURI;
let AUDIENCE = require('./conf').AUDIENCE;
let ISSUER = require('./conf').ISSUER;

const authCheck = jwt({
  secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        // YOUR-AUTH0-DOMAIN name e.g prosper.auth0.com
        jwksUri: JWKSURI
    }),
    // This is the identifier we set when we created the API
    audience: AUDIENCE,
    issuer: ISSUER,
    algorithms: ['RS256']
});

module.exports = authCheck;