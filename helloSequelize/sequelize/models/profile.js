const { DataTypes } = require("sequelize")


module.exports = (sequelize) => {
    
 sequelize.define("Profile", {
    profile_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    about : {
        allowNull: true, 
        type: DataTypes.STRING
    }
 })   
}



