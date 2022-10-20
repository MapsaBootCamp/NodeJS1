import {PrismaClient} from "@prisma/client"
import express, { Request, Response, Router } from "express";

const prisma = new PrismaClient()

const todoRoute: Router = express.Router()


todoRoute.get("/todo-list", async(req: Request, res: Response) => {
    const todos = await prisma.todo.findMany({
        include: {
            category: {
                select: {
                    name: true
                }
            }
        }
    }
    )

    return res.send(todos)
})


export default todoRoute;