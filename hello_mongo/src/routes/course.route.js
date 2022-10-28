const express = require("express");
const { createCourse, addUserToCourse } = require("../controllers/course.controller")
const router = express.Router()

router.post("/list", createCourse)
router.post("/add-user-to-course", addUserToCourse)


module.exports = router