const express = require("express")

const router = express.Router()

const users = ["Ashkan", "Mamamd"]

router.
route("/")
    .get((req, res) => {
            res.json({users})
    })
    .post((req, res) => {
        if(!req.body.username){
            return res.status(400).json({
                "err": "username field is required!"
            })
        }else{
            users.push(req.body.username)
            return res.status(201).send(
                {
                    "messgae": "user created",
                    "data": req.body.username
                }
            )
        }
    })

router.put("/:id", (req, res) => {
    const id = req.params.id;
    if(!users[id]){
        return res.status(400).json({
            "err": "hamchin useri nadarim"
        })
    }else{
        users[id] = req.body.username ? req.body.username : users[id]
        return res.send(`${users[id]} succesfully updatede`)
    }
})

router.delete("/:id", (req, res) => {
    const id = req.params.id;
    if(!users[id]){
        return res.status(400).json({
            "err": "hamchin useri nadarim"
        })
    }else{
        const deletedUser = users.splice(id, 1)
        return res.send(`${deletedUser} succesfully deleted`)
    }
})

module.exports = router