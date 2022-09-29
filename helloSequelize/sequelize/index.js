const { Sequelize, DataTypes } = require("sequelize")
const { oneToOneAssociation, manyToManyAssociation, oneToManyAssociation } = require("./modelRelations")

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite',
    logQueryParameters: true
})


const mdoelDefiners = [
    require("./models/user"),
    require("./models/product"),
    require("./models/profile"),
    require("./models/cart"),
    require("./models/cartItem"),

]


for(const modelFunction of mdoelDefiners){
    modelFunction(sequelize)
}

////// Associations
oneToOneAssociation(sequelize.models.User, sequelize.models.Profile)
oneToManyAssociation(sequelize.models.User, sequelize.models.Cart)
manyToManyAssociation(sequelize.models.Cart, sequelize.models.Product, sequelize.models.CartItem)

module.exports = sequelize;