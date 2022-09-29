const sequelize = require("./sequelize");
const app = require("./express");

const PORT = 3000;

async function assertDatabaseConnectionOk() {
	console.log(`Checking database connection...`);
	try {
		await sequelize.authenticate();
		console.log('Database connection OK!');
	} catch (error) {
		console.log('Unable to connect to the database:');
		console.log(error.message);
		process.exit(1);
	}
}


async function init(){
    try {
        await assertDatabaseConnectionOk();
		app.listen(PORT, () => {
			console.log(`app listen on port ${PORT}`);
		})
    } catch (error) {
        
    }
}

init()