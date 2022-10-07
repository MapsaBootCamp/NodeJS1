const express = require("express");
const { validate } = require("../middlewares/validation");
const { chat } = require("../controllers");
const {check} = require("express-validator");
const { jwtTokenAuthentication }= require("../middlewares/authentication")

const router = express.Router();

router.get("/list", jwtTokenAuthentication, chat.getAllChats);



module.exports = router;