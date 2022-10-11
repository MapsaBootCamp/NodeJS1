
const getAllChats = async(req, res) => {
    return res.send(req.user)
}


module.exports = {
    getAllChats
}