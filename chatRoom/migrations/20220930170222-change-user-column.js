module.exports = {
    async up(queryInterface, Sequelize){
        await queryInterface.changeColumn('Users', 'firstName', {
                type: Sequelize.TEXT,
                allowNull: true,
            })
    },

    async down(queryInterface, Sequelize){
            await queryInterface.changeColumn('Users', 'firstName', {
                type: Sequelize.STRING,
            })
    }
};