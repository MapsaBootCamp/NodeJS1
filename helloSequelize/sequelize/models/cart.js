const { DataTypes } = require("sequelize")


module.exports = (sequelize) => {
    
 sequelize.define("Cart", {
    cart_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    }
 })   
}