const sqlite3 = require("sqlite3");
const { open } = require("sqlite");
require("dotenv").config();

module.exports = async() => {
    return open({
        filename: process.env.SQLITE_PATH,
        driver: sqlite3.Database,
    })
}
