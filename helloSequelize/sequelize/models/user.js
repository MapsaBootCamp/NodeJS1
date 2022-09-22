const { DataTypes } = require("sequelize")


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
        type: DataTypes.STRING
    },
    nickName: {
        allowNull: true, 
        type: DataTypes.STRING
    },
    lastName: {
        defaultValue: "GholiKhan",
        allowNull: false, 
        type: DataTypes.STRING
    }
 })   
}