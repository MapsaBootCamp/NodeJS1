const { Sequelize, DataTypes } = require("sequelize")


const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite',
    logQueryParameters: true
})


const mdoelDefiners = [
    require("./models/user"),
    require("./models/product"),

]

for(const modelFunction of mdoelDefiners){
    modelFunction(sequelize)
}


module.exports = sequelize;