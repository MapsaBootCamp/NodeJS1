const express = require("express")
const db = require("../config/database")

const router = express.Router();

router.get("/menu", (req, res) => {

    db.all("SELECT name, price FROM food", (err, row) => {
        if(err){
            console.log(err.message);
            return res.status(500).send(err)
        }else{
            return res.json({
                "foodList": row
            })
        }
    })
})

const getUserPomise = (req) => new Promise(function(resolve, reject){
    db.get(`SELECT * FROM users WHERE username=?`, req.params.username, (err, row) => {
        if(err){return reject(err);}
        resolve(row);
    })
})

const getFoodPomise = (foodName) => new Promise(function(resolve, reject){
    db.get(`SELECT * FROM food WHERE name=?`, foodName, (err, row) => {
        if(err){return reject(err);}
        resolve(row);
    })
})




router.get("/history/:username",async (req, res) => {
    db.serialize(async () => {
        try {
            const userObj = await getUserPomise(req)
            if(!userObj){
                return res.send("chenin useri nadarim");
            }
            db.all(`SELECT * FROM purchase WHERE user=?`, userObj.user_id, (err, row) => {
                if(err){
                    console.log(err.message);
                    return res.status(500).send(err)
                }else{
                    res.json(row)
                }
            })
        } catch (error) {
            console.log(error);
            return res.status(400).send(error)
        }
    
    })
})

router.post("/order/:username", (req, res) => {
    db.serialize(async () => {
        try {
            const userObj = await getUserPomise(req)
            if(!userObj){
                return res.send("chenin useri nadarim");
            }
            const errors = []
            if(!req.body.foodName){
                errors.push("name ghaza ra bayyad bedi(foodName)!")
            }
            if(!req.body.orderQty){
                errors.push("tedadi ke mikhay ro ham begu(orderQty)!")
            }

            if(errors.length > 0){
                return res.status(400).json({errors})
            }
            
            const foodObj = await getFoodPomise(req.body.foodName);

            if(!foodObj){
                return res.status(400).send("chenin ghazai nadarim");
            }else{
                if(req.body.orderQty > foodObj.qty){
                    return res.status(400).send("inghadi mojudi nadarim")
                }else{
                    db.run("begin transaction");

                    db.run("UPDATE food SET qty=? WHERE name=?", [foodObj.qty - req.body.orderQty, req.body.foodName])
                    db.run("INSERT INTO purchase(user, food, date, orderQty) VALUES(?, ?, ?, ?)", [
                        userObj.user_id, foodObj.food_id, (new Date()).toDateString(), req.body.orderQty
                    ])
                    db.run("commit");
                    res.status(200).send("ghaza be khubi khshi save shod")
                }
            }

        } catch (error) {
            console.log(error);
            return res.status(400).send(error)
        }
    
    })
})

module.exports = router;