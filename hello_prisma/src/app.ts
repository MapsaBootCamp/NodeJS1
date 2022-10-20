import express, { Request, Response, Express } from "express";
import cors from "cors"
import * as dotenv from "dotenv"

import todoRoute from "./todo/todo.route";

dotenv.config();
const PORT = process.env.PORT || 3000;

const app: Express = express() 

app.use(cors())
app.use(express.json())

app.use("/api", todoRoute)


app.listen(PORT, ()=> {
    console.log("start app on port", PORT);
    
})