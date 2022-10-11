const express = require("express");
const bodyParser = require('body-parser')

const app = express();
app.use(express.json());
app.use(bodyParser());

const routeAPIDefiner = [
    ["/auth", require("./api/auth")],
    ["/chat", require("./api/chat")],
]

const routeViewsDefiner = [
    ["/auth", require("./view/auth")],
]

for(const route of routeAPIDefiner){
    app.use(`/api/${route[0]}`, route[1]);
}

for(const route of routeViewsDefiner){
    app.use(route[0], route[1]);
}

module.exports = app;