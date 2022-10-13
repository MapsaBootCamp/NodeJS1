const { user } = require("pg/lib/defaults");
const db = require("../../models");

const getAllChats = async(req, res) => {
    try {
        
        const chats = await db.Group.findAll({
            include : [{
                model: db.User,
                as: "",
                where: { username: req.user.username},
            }],
        })    
        return res.send(chats)
    } catch (error) {
        return res.send({
            "error": error.message
        })
        
    }
}

const createGroup = (req, res) => {

}

const addGroupMembers = (req, res) => {
    
}

const createPrivateChat = (req, res) => {

}

const sendMessage = async (req, res) => {

}


module.exports = {
    getAllChats
}