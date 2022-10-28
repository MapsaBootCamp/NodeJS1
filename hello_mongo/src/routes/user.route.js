const express = require("express");
const { userList, userCreate } = require("../controllers/user.controller")
const router = express.Router()

router.get("/list", userList)
router.post("/list", userCreate)


module.exports = router