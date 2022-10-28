const { User } = require("../models/user.model")


function getCourseData(courseObj){
    return {
        id: courseObj._id,
        title: courseObj.title
    }
}

function getUserData(userObj){
    const result =  {
        id: userObj._id,
        username: userObj.username,
        courses: userObj.courses.map((course) => getCourseData(course))
    }
    return result;
}

exports.userList = async(req, res) => {
    try { 
        const users = await User.find().populate("courses").exec()
        const result = users.map((user) => getUserData(user))
        return res.status(200).json(result)
    } catch (error) {
        return res.send(error.message)
    }
}

exports.userCreate = async(req, res) => {
    try { 
        const { username, password } = req.body
        const user = new User({username, password})
        await user.save()
        return res.status(200).json(user)
    } catch (error) {
        return res.send(error.message)
    }
}