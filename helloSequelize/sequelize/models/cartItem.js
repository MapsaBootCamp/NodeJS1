const { DataTypes } = require("sequelize")


module.exports = (sequelize) => {
    
    sequelize.define('CartItem', {
        CartCartId: {
          type: DataTypes.INTEGER,
          references: {
            model: sequelize.models.Cart, // 'Movies' would also work
            key: 'cart_id'
          }
        },
        ProductProductId: {
          type: DataTypes.INTEGER,
          references: {
            model: sequelize.models.Product, // 'Actors' would also work
            key: 'product_id'
          }
        },
        qty: {
            type: DataTypes.INTEGER,
            allowNull: false 
        }
      }); 
}
