const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");

/* Routes */
const api = require("./routes");

const app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json(), cors());


const server = app.listen(4000, () => {
    let host = server.address().address;
    let port = server.address().port;

    console.log("Listening at http://%s:%s", host, port);
})

/*  Endpoints */
app.use("/api", api);
