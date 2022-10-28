const mongoose = require("mongoose")
const passportLocalMongoose = require("passport-local-mongoose")

const Roles = ["user", "admin"]

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: [true, "user bayad unique bashe"],
        validate: {
            validator: function(val) {
                return val.length >= 6 
            },
            message: () => `username not valid(bishtar az 6)`
        },
    },
    password: String,
    active: {
        type: Boolean,
        default: true,
    }, 
    role: {
        type: String,
        enum: Roles,
        default: "user"
    },
    courses: [
        {
            type: mongoose.Types.ObjectId,
            ref: "Course"
        }
    ]
})

userSchema.plugin(passportLocalMongoose);

exports.User = new mongoose.model("User", userSchema)