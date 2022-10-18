require('dotenv').config();
const path = require("path")
const express = require("express");
const app = require("./routes");
const { userSession } = require("./middlewares/authentication")
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const db = require('./models');
const io = new Server(server);
const { verify }= require("jsonwebtoken")

app.use(express.static(path.join(__dirname, "public")))

app.set("view engine", "pug")


users = ["Ashkan", "Asghar", "Gholam"]

io.of(/\/chat\/\d+/).use((socket, next) => {
    token = socket.handshake.auth.token;
    
    let verifiedToken;
    if(!token){
        throw new Error("token lazeme");
    }else{
        try {
            verifiedToken = verify(token, process.env.SECRET_KEY);
            
        } catch (error) {
            throw new Error(error)
        }
    }

    db.User.findOne({
        where: {
            username: verifiedToken.username
        },
       attributes: {
           exclude: ["password"]
       }

    }).then((user) => {
        socket.user = user
        next()
    }
    ).catch((error) => {
        throw new Error(error)
    })
}).on('connection', (socket) => {
    console.log(`a user connected`);
    const groupId = socket.handshake.query.groupId
    socket.join(groupId)

    socket.on("chat message", async (msg) => {
        try {
            await db.Chat.create({
                GroupId: msg.groupId,
                senderId: socket.user.id,
                content: msg.chatContent
            })
            io.of(`/chat/${groupId}`).to(groupId).emit("chat message", `sender: ${socket.user.username} --------- ${msg.chatContent}`)   
            
        } catch (error) {
            console.log(error);
        }
    })
});

io.on("disconnect", (socket) => {
    console.log("disconnect");
})

server.listen(process.env.PORT, ()=> {
    console.log("app listen on port ", process.env.PORT);
})
