const express = require("express");

const app = express();
app.use(express.json());

const routeDefiner = [
    ["/auth", require("./auth")],
    ["/chat", require("./chat")],
]


for(const route of routeDefiner){
    app.use(route[0], route[1]);
}

module.exports = app;