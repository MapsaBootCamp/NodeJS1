import prisma from "../prismaClient/prisma"


export type Todo  = {
    title: string,
    description: string | null,
    done: boolean,
    due_date: Date | null,
    category: Category
}

export type TodoWrite = {
    title: string,
    description?: string,
    cat_id: number,
    due_date?: Date 
}

export type Category = {
    name: string
}

export const getAllTodo = async(): Promise<Todo[]> => {
    return prisma.todo.findMany({
           select: {
                title: true,
                description: true,
                done: true,
                due_date: true,
                category: {
                    select: {
                        name: true
                    }
                }
            }  
    })
}


export const createTodo = async(data: TodoWrite): Promise<Todo> => {
    return prisma.todo.create({
        data,
        include: {
            category: {
                select: {name: true}
            }
        }
    })
} 


export const countDoneTask = async(): Promise<number> => {

    let count: number = 0;

    try {        
        const countObj = await prisma.todo.aggregate({
            where: {
                done: true
            },
            _count: {
                title: true
            }
        })
        count = countObj._count.title;

    } catch (error: any) {
        throw new Error(error.message);
    }
    
    return count;


}