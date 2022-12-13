const express = require("express");
var createError = require('http-errors');
const grpc = require("@grpc/grpc-js");
const path = require("path")
const PROTO_PATH = path.join(__dirname, "../news.proto")
const protoLoader = require("@grpc/proto-loader");

const app = express()
app.use(express.json())

const options = {
    keepCase: true,
    longs: String,
    enums: String,
    default: true,
    oneofs: true
}

const protoPackage = protoLoader.loadSync(PROTO_PATH, options)
const NewService = grpc.loadPackageDefinition(protoPackage).NewService


const client = new NewService(
    "localhost:5001",
    grpc.credentials.createInsecure()
)


app.get("/api/news-list", (req, res, next) => {

    client.getAllNews({}, (err, news) => {
        if (!err) {
            return res.send(news);
        } else {
            return next(createError(500, err));
        }
    })
})


app.get("/api/news-detail/:id", (req, res, next) => {
    const id = req.params.id
    console.log(id);
    client.getNewsDetail({ id }, (err, news) => {
        if (!err) {
            return res.send(news);
        } else {
            return next(createError(500, err));
        }
    })
})

app.post("/api/news-list", (req, res, next) => {
    client.createNews(req.body, (err, data) => {
        if (!err) {
            return res.send(data);
        } else {
            return next(createError(500, err.message));
        }
    })
})


app.listen(3000, () => {
    console.log("app express running..");
})

