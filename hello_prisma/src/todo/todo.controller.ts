import { Prisma, Category} from "@prisma/client"
import express, { Request, Response, Router } from "express";
import * as todoService from "./todo.service"

const todoRoute: Router = express.Router()


todoRoute.route("/todo-list")
    .get(async(req: Request, res: Response): Promise<Response> => {

        try {
            const todos = await todoService.getAllTodo()
            return res.send(todos)

        } catch (error) {
            return res.send(error)
        } 
    })
    .post(async(req: Request, res: Response) => {
        try {
            const { title, description, cat_id, due_date} = req.body

            const todo = await todoService.createTodo(req.body)
            return res.send(todo)
        } catch (error) {
            return res.send(error)
        }
    })


todoRoute.get("/number-done-task", async(req: Request, res: Response) => {
    try {
        const num = await todoService.countDoneTask();
        res.json(num)
    } catch (error) {
        res.sendStatus(400)
    }
})


// TODO: Friday ---> 6/aban/1401
todoRoute.route("/todo/:id")
    .get(async (req:Request, res:Response) => {
        
    })
    .put(async (req:Request, res:Response) => {
        
    })
    .delete(async (req:Request, res:Response) => {
        
    })

export default todoRoute;