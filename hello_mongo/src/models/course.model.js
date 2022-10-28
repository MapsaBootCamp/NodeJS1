const mongoose = require("mongoose")


const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    }
}, {
    timestamps: true
})

courseSchema.statics.findOneOrCreate = function findOneOrCreate(condition, callback) {
    const self = this
    self.findOne(condition, (err, result) => {
        return result ? callback(err, result) : self.create(condition, (err, result) => { return callback(err, result) })
    })
}
exports.Course = new mongoose.model("Course", courseSchema)