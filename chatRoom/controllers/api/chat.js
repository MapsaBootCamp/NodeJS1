const { user } = require("pg/lib/defaults");
const { where } = require("sequelize");
const db = require("../../models");

const getAllChats = async(req, res) => {
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


const addGroupMembers = async (req, res) => {

    const groupId = req.body.groupId;
    const addedUserId = req.body.addedUserId;
    
    try {
        
        const groupMemberObj = await db.GroupMember.findOne({
            include: [{
                model: db.User,
                where: {username: req.user.username},
                attributes: []
            },{
                model: db.Group,
                where: {id: groupId},
                attributes: []
            }],
            attributes : ["type"]
        })

        if(!groupMemberObj || groupMemberObj.type !== "admin"){
            return res.sendStatus(403)
        }

        await db.GroupMember.findOrCreate({
            where: {
                UserId: addedUserId,
                GroupId: groupId,
                type: "member"
            }
        })

        return res.status(201).send("user add shod")

    } catch (error) {
        return res.send({
            "status": "error",
            "message": error.message
        })
    }
}

const getAllMembersOfOneGroup = async(req, res) => {
    const groupId = req.params.id
    const members = await db.Group.findOne({
        where: {
            id: groupId
        },
        include: [{
            model: db.GroupMember,
            include: [{
                model: db.User,
                attributes: ["username"]
            }],
            attributes: ["type"]
        }]
    })

    return res.send(members)
}



const checkUserExist = async (req, res) => {

}


const createPrivateChatTables = (req, res) => {

}

const sendMessage = async (req, res) => {

}


const getChatMessage = async (req, res) => {

}

const deleteGroup = async (req, res) => {

}

const editGroupName = async (req, res) => {

}

module.exports = {
    getAllChats,
    createGroup,
    addGroupMembers,
    getAllMembersOfOneGroup
}