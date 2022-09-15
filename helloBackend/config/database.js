const sqlite3 = require('sqlite3').verbose()

const DBFILENAME = "db.sqlite"

const db = new sqlite3.Database(DBFILENAME, (err) => {
    if(err){
        console.log(err.message);
        throw "failed database connection"
    }else{
        console.log("connected to db...");
        db.run(`CREATE TABLE users(
                user_id INTEGER PRIMARY KEY,
                username TEXT NOT NULL UNIQUE,
                password TEXT,
                active INTEGER NOT NULL CHECK (active IN (0, 1))
        )`, (err) => {
            if(err){
                    //// chon table hast dg dade jadid nariz
            }else{
                db.run(`INSERT INTO users(username, password, active) 
                            VALUES (? , ? , ?)`, ["Ashkan", "1234", 1])
            }
        })
    }
})

module.exports = db;

