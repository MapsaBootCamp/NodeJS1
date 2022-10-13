const { user } = require("pg/lib/defaults");
const db = require("../../models");

const getAllChats = async(req, res) => {
    try {
        
        const chats = await db.Group.findAll({
            include : [{
                model: db.User,
                as: "members",
                where: { username: req.user.username},
                attributes: []
            }],
            attributes: ["id", "name", "public"]
        })

        return res.send(chats)
    } catch (error) {
        return res.send({
            "error": error.message
        })
        
    }
}

const createGroup = async (req, res) => {
    const t = await db.sequelize.transaction();

    try {
        
        const groupName = req.body.groupName;
        const groupObj = await db.Group.create({name: groupName, public: true}, { transaction: t });
        const members = []
    
        await db.GroupMember.create({
            UserId: req.user.id,
            GroupId: groupObj.id,
            type: "admin"
        }, { transaction: t })
    
        for(const memberId of req.body.membersId){
            members.push(
                {
                    UserId: memberId,
                    GroupId: groupObj.id,
                    type: "member"
                }
            )
        }
        await db.GroupMember.bulkCreate(members, { transaction: t });
        await t.commit()

        return res.status(201).send({"status": "success"})
    } catch (error) {
        await t.rollback()
        return res.send({"error": error.message})
    }


}

const addGroupMembers = (req, res) => {

}

const createPrivateChatTables = (req, res) => {

}

const sendMessage = async (req, res) => {

}


const getChatMessage = async (req, res) => {

}


module.exports = {
    getAllChats,
    createGroup
}