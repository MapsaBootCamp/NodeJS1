const db = require("../../models")

const getChatMessage = async(req, res) => {
    try {
        const chats = await db.Chat.findAll({
            where: {
              GroupId: req.params.groupId
            },
            order:[
                ["updatedAt", "ASC"]
            ],
            include: {
                model: db.User,
                as: "sender"
            }
        })
        res.render("chatPage", {chats, req})
    } catch (error) {
        
        res.send(error.message)
    }
}



module.exports = {
    getChatMessage
}