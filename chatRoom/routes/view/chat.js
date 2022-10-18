const express = require("express");
const  { chatTemplate } = require('../../controllers');
const { jwtTokenAuthentication }= require("../../middlewares/authentication")
const { checkGroupAccess } = require("../../middlewares/authorization")
const router = express.Router()


router.get("/:groupId", jwtTokenAuthentication, checkGroupAccess,  chatTemplate.getChatMessage)


module.exports = router;
