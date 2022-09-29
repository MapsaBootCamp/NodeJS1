const { Op } = require("sequelize")
const sequelize = require("./sequelize");

const { User, Profile } = sequelize.models


console.log("start to sync DB....");


(async function setup(){
    try {
        await sequelize.sync({alter: true})
        // const userObj = User.build({
        //     "username": "Asghar",
        //     "password": "1234",
        //     "firstname": "AAAA"       
        // });
        // await userObj.save();
        // const userObj = await User.create({
        //     "username": "ANNNNN",
        //     "password": "1234",
        //     "firstname": "EEEE"       
        // });
        // userObj.username = "Elham";
        // // await userObj.save()

        // await User.bulkCreate([
        //     { username: 'jack-sparrow', password: "1234", firstName: "A" },
        //     { username: 'white-beard', password: "1234", firstName: "A" },
        //     { username: 'black-beard', password: "1234", firstName: "A" },
        //     { username: 'brown-beard', password: "1234", firstName: "A" },
        // ]);
        // const filterDate = new Date(Date.now() - 86400 * 1000);
        
        // User.findOrCreate({
        //     attributes: {exclude: ["password", "firstName"]},
        //     where : {
        //         username: "Ashk",
        //         password: "1234",
        //         nickName: "aaaa"

        //     }
        // }).then((users) => console.log(users))

        // const usersList = await User.findAll({
        //     attributes: {exclude: ["password", "firstName"]},
        //     where : {
        //         createdAt: {
        //             [Op.gt]: filterDate
        //         }

        //     }
        // })
        // for(const user of usersList) 
        //     console.log(user.username)

        // const userObj = await User.findOne({
        //     where: {
        //         user_id : 19
        //     },
        //     include: {
        //         model: Profile,
        //         attributes: ["about"]
        //       }
        // })

        // console.log(userObj);
        // console.log("username ", userObj.username);
        // console.log("about ", userObj.Profile.about);
        // const userProfile = await userObj.getProfile()

        // console.log(userProfile);

        console.log("DB sync shod!");
    
    } catch (error) {
        console.log(error);
    }
})()

