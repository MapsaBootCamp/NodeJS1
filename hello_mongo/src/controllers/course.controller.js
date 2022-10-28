const { User } = require("../models/user.model")
const { Course } = require("../models/course.model")


exports.createCourse = async(req, res) => {
    try {
        var course
        Course.findOneOrCreate({ title: req.body.courseName}, (err, courseObj) => {
            if(err){
                throw new Error(err.message)
            }else{
                course = courseObj;
            }
        })
        return res.status(201).json(course)
    } catch (error) {
        return res.send(error.message)
    }
}


exports.addUserToCourse = async(req, res) => {
    try {
        const user = await User.findById(req.body.userId)
        if(!user){
            return res.send("user yaft nashod")
        }
        let course = await Course.findOne({
            title: req.body.courseName
        })
        if(!course){
            return res.send("chenin coursi nadarim")
        }
    
        user.courses.push(course)
        await user.save()
    
        return res.send("course be user ezafe shod")
    } catch (error) {
        return res.send(error.message)
    }
}