const express = require("express");

const app = express()
app.use(express.json());

const routeDefine = [
    ["/user", require("./routes/user")],
    ["/product", require("./routes/product")]
]


for(const route of routeDefine){
    app.use(route[0], route[1])
}


module.exports = app;