const express = require("express");

const app = express()

const routeDefine = [
    ["/user", require("./routes/user")]
]


for(const route of routeDefine){
    app.use(route[0], route[1])
}


module.exports = app;