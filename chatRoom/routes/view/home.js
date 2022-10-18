const express = require("express");
const  { home } = require('../../controllers');
const { jwtTokenAuthentication }= require("../../middlewares/authentication")

const router = express.Router()


router.get("/", jwtTokenAuthentication,  home)


module.exports = router;
