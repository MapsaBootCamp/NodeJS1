const express = require("express");
const { Op } = require("sequelize");
const { body } = require("express-validator");
const sequelize = require("../../sequelize");
const validate = require("../../utils");

const router = express.Router();
const { User, Product } = sequelize.models;

router.route("/list")
    .get(async (req, res) => {
        try {
            const products  = await Product.findAll()
            return res.status(200).json(products)
        } catch (error) {
            return res.status(400).json(error)
        }
    }).post(validate([
            body("username").not().isEmpty().trim().escape(),
            body("name").trim().escape()
        ]),
            async (req, res) => {
                    try {
                        const user = await User.findOne({
                            where: {
                                username: req.body.username
                            }
                        })
                        if(!user){
                            return res.sendStatus(404);
                        }else if(user.role === "staff" || user.role == "superuser"){
                            const product = await Product.create(req.body)
                            return res.status(201).send(product)
                        }
                        return res.sendStatus(403);
                        
                    } catch (error) {
                        return res.status(400).send(error)
                    }
    })

router.get("/search", async(req, res) => {
    const q = req.query.q;
    try{const products = await Product.findAll({
        where: {
            name: {
                [Op.like]: `%${q}%`
            }
        }
    })
    return res.json(products)
    }catch(error){
        return res.send(error)
    }
})


module.exports = router
