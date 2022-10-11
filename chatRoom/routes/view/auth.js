const express = require("express");
const  {authTemplate} = require('../../controllers');

const router = express.Router()


router.route("/login-form")
    .get(authTemplate.loginForm.get)
    .post(authTemplate.loginForm.post)


module.exports = router;
