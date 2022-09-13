const express = require("express");

const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    res.send("welcome!");
})


const userRouter = require("./routes/user")
app.use("/users", userRouter)

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`server listen on ${PORT}`);
})