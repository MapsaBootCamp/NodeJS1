const express = require("express");
const { body } = require("express-validator");
const sequelize = require("../../sequelize");
const validate = require("../../utils");

const router = express.Router();
const { User, Profile } = sequelize.models;

router.route("/list")
    .get(async (req, res) => {
        try {
            const users  = await User.findAll()
            return res.status(200).json(users)
        } catch (error) {
            return res.status(400).json(error)
        }
    }).post(validate([body("username").not().isEmpty().trim().escape(),
            body("email").optional().isEmail(),
            body("password").isLength({min : 8})]),
            
            async (req, res) => {
                    try {
                        const user = await Profile.create({
                            User: req.body,
                        },{
                            include: [User]
                        })
                        return res.status(201).send({"status": user})
                        
                    } catch (error) {
                        return res.status(400).send(error)
                    }
    })


module.exports = router