const { DataTypes } = require("sequelize")
const md5 = require('md5');


module.exports = (sequelize) => {
 sequelize.define("User", {
    user_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    username : {
        allowNull: false, 
        type: DataTypes.STRING,
        unique: true
    },
    email : {
        allowNull: true,
        type: DataTypes.STRING,
        validate: {
            isEmail: true
        } 
    },
    password: {
        allowNull : false,
        type: DataTypes.STRING,
        set(value){
            this.setDataValue("password", md5(value))
        }
    },
    nickName: {
        allowNull: true, 
        type: DataTypes.STRING
    },
    lastName: {
        defaultValue: "GholiKhan",
        allowNull: false, 
        type: DataTypes.STRING
    },
    role: {
        type: DataTypes.ENUM(["superuser", "staff", "active", "notActive"]),
        defaultValue: "active"
    } 
 }, {
     hooks: {
        beforeValidate: (user, option) => {
            console.log("hellllo");
        }
     }
 })   
}