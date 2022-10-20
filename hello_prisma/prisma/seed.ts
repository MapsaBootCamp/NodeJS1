import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


async function main() {

    const category = await prisma.category.create({
        data: {
            name: "home",
            todos: {
                create: [
                    {title: "panir kharidan"},
                    {title: "mast kharidan"}
                ]
            }
        }
    })
    
    console.log("test data generated.....");
    
}

main()

