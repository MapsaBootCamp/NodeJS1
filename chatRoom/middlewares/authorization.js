const db = require("../models")

const checkGroupAccess = async(req, res, next) => {
    if(!req.user){
        res.send("user ro bayad beshnasam")
    }
    try {
        const membershipObj = await db.GroupMember.findOne({ 
            where: {
                UserId: req.user.id,
                GroupId: req.params.groupId
            }
        }) 
        
        if(membershipObj){
            next()
        }else{
            res.send("dastresi be in group nadari")
        }
        
    } catch (error) {
        res.send(error)
    }

}


module.exports = {
    checkGroupAccess
}