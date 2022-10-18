const express = require("express");
const { validate } = require("../../middlewares/validation");
const { chatAPI } = require("../../controllers");
const {check} = require("express-validator");
const { jwtTokenAuthentication }= require("../../middlewares/authentication")

const router = express.Router();

router.get("/list", jwtTokenAuthentication, chatAPI.getAllChats);
router.post("/create-group", jwtTokenAuthentication, chatAPI.createGroup);
router.post("/add-group-member", jwtTokenAuthentication, chatAPI.addGroupMembers);
router.get("/group-member/:id", chatAPI.getAllMembersOfOneGroup);



module.exports = router;