const db = require("../../models");

const index = async(req, res) => {
    try {
        
        const chats = await db.GroupMember.findAll({
            where: {
                UserId: req.user.id,
               
            },
            include: [{
                model: db.Group,
                attributes: ["name", "public"]
            }],
            attributes: {
                exclude: ["UserId"]
            }
        })

        res.render("index", {chats, req})

    } catch (error) {
        return res.render("error", error.message)
    }
}

module.exports = index