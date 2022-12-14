const express = require("express");

const app = express();

app.use(express.json());

const todos = [{
    id: 1,
    title: "do somthing",
    done: false,
    description: "kegehge"
}]

app.get("/api/todos", (req, res) => {
    return res.json(todos)
})

app.post("/api/todos", (req, res) => {
    const data = req.body
    todos.push({ id: 2, ...data })
    return res.status(201).json(todos[1])
})

module.exports = {
    app
}

// function summ(a, b) {
//     return a + b
// }


// function reduction(a, b) {
//     return a - b
// }

// module.exports = {
//     summ,
//     reduction
// }