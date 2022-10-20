import { Prisma, Category,PrismaClient} from "@prisma/client"
import express, { Request, Response, Router } from "express";

const prisma = new PrismaClient()

const todoRoute: Router = express.Router()


todoRoute.route("/todo-list")
    .get(async(req: Request, res: Response): Promise<Response> => {

        try {

            const todos = await prisma.todo.findMany({
                include: {
                    category: {
                        select: {
                            name: true
                        }
                    }
                }
            })

            return res.send(todos)

        } catch (error) {
            return res.send(error)
        } 
    })
    .post(async(req: Request, res: Response) => {
        try {
            const { title, description, cat_id, due_date} = req.body

            const todo = await prisma.todo.create({
                data: {
                    title,
                    description,
                    cat_id,
                    due_date
                }
            })
            return res.send(todo)
        } catch (error) {
            return res.send(error)
        }
    })


todoRoute.route("/todo/:id")
    .get(async (req:Request, res:Response) => {
        
    })
    .put(async (req:Request, res:Response) => {
        
    })
    .delete(async (req:Request, res:Response) => {
        
    })


todoRoute.get("/number-done-task", async(req: Request, res: Response) => {
    try {
        const num = await prisma.todo.aggregate({
            where: {
                done: false
            },
            _count: {
                title: true
            }
        })

        res.send(num)
    } catch (error) {
        
    }
})


export default todoRoute;