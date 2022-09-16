const sqlite3 = require('sqlite3').verbose()

const DBFILENAME = "db.sqlite"

const db = new sqlite3.Database(DBFILENAME, (err) => {
    if(err){
        console.log(err.message);
        throw "failed database connection"
    }else{
        console.log("start config db...");
        db.serialize(() => {

            db.run(`CREATE TABLE IF NOT EXISTS users(
                    user_id INTEGER PRIMARY KEY,
                    username TEXT NOT NULL UNIQUE,
                    password TEXT,
                    active INTEGER NOT NULL CHECK (active IN (0, 1))
            )`);

            db.run(`CREATE TABLE IF NOT EXISTS food(
                    food_id INTEGER PRIMARY KEY,
                    name TEXT NOT NULL UNIQUE,
                    price INTEGER NOT NULL,
                    qty INTEGER NOT NULL
            )`);

            db.run(`CREATE TABLE IF NOT EXISTS purchase(
                purchase_id INTEGER PRIMARY KEY,
                user INTEGER NOT NULL,
                food INTEGER NOT NULL,
                date TEXT NOT NULL,
                orderQty INTEGER NOT NULL,
                FOREIGN KEY (user)
                    REFERENCES users(user_id)
                FOREIGN KEY (food)
                    REFERENCES food(food_id)
            )`);
        })
        console.log("finish config db...");
    }
})

module.exports = db;

