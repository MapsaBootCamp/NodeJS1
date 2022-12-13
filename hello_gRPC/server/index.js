const grpc = require("@grpc/grpc-js");
const path = require("path")
const PROTO_PATH = path.join(__dirname, "../news.proto")
const protoLoader = require("@grpc/proto-loader");


const options = {
    keepCase: true,
    longs: String,
    enums: String,
    default: true,
    oneofs: true
}

const protoPackage = protoLoader.loadSync(PROTO_PATH, options)
const newProto = grpc.loadPackageDefinition(protoPackage)

const news = [
    { id: 1, title: "ghahremani argantine", category: "Sport", content: "eihgeihgiewhghe" },
    { id: 2, title: "asgfejgfejgf", category: "Politic", content: "OK" },
]

const server = new grpc.Server()


server.addService(newProto.NewService.service, {
    getAllNews: (call, callback) => {
        callback(null, { news })
    },
    getNewsDetail: (call, callback) => {
        console.log(call.request.id);
        const findedNews = news.find(n => n.id === call.request.id)
        callback(null, findedNews)
    },
    createNews: (call, callback) => {
        const data = call.request
        console.log(data);
        const lastId = news[news.length - 1].id
        const createdNews = { id: lastId + 1, ...data }
        news.push(createdNews)
        callback(null, createdNews)
    }
})

server.bindAsync(
    "localhost:5001",
    grpc.ServerCredentials.createInsecure(),
    (err, port) => {
        console.log("Server running");
        server.start()
    }

)