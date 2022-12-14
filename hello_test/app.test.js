const supertest = require("supertest")
const { app } = require("./app")

// const { summ, reduction } = require("./app")



// describe("calculator", () => {
//     let a, b

//     beforeAll(() => {
//         /// Arrange
//         a = 1
//         b = 2
//     })
//     beforeEach(() => {
//         console.log("before test");
//     })


//     test("test summation function", () => {
//         /// Act
//         const result = summ(a, b)

//         /// Assertion
//         expect(result).toBe(3)
//     })

//     test("test reduction function", () => {
//         /// Act
//         const result = reduction(a, b)

//         /// Assertion
//         expect(result).toBe(-1)
//     })
// })

describe("todos", () => {

    test("GET /api/todos ---> list todos", async () => {
        await supertest(app)
            .get("/api/todos")
            .expect(200)
            .then(response => {
                expect(response.body).toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({
                            title: expect.any(String),
                            done: expect.any(Boolean),
                            description: expect.any(String)
                        })]
                    )
                )
            })
    })



    test("POST /api/todos ---> create todo", async () => {
        await supertest(app)
            .post("/api/todos")
            .send({
                title: "kekhe",
                done: false,
                description: "leihgeihgie"
            })
            .expect(201)
            .then(response => {
                expect(response.body.title).toBe("kekhe")
            })
    })
})
