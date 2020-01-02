const sqlite3 = require("sqlite3").verbose();

/**
 * Class representing a database connection.
 * @param {object} _db - Protected property.
 */
module.exports = class DB {
    /**
     * @constructor
     * @param {string} dbName - Relative address to database file.
     * @description Create a connection to database or create new database.
     */
    constructor(dbName) {
        this._db = new sqlite3.Database(dbName, err => {
            if (err) {
                console.error(err.message);
            }
            console.log(`Connected to the "${dbName}" database!`);
        });
    }
    /**
     * @method dbClose
     * @description Close database connection.
     */
    dbClose() {
        this._db.close((err) => {
            if (err) {
                return console.error(err.message);
            }
            console.log('Close the database connection!');
        });
    }
    /**
     * @method all
     * @param {string} table - Name of table in database.
     * @return {array} All data from table.
     * @description Get all data from selecte table in database.
     */
    all(table) {
        const query = `SELECT * FROM ${table}`;
        this._db.all(query, [], (err, rows) => {
            if (err) {
                return console.error(err.message);
            }
            return rows;
        });
    }
}