const express = require("express");
const sequelize = require("../../sequelize");

const router = express.Router();
const { User } = sequelize.models;

router.route("/list")
    .get(async (req, res) => {
        try {
            const users  = await User.findAll()
            return res.status(200).json(users)
        } catch (error) {
            return res.status(400).json(error)
        }
    })




module.exports = router