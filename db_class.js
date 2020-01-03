"use strict";
const sqlite3 = require("sqlite3").verbose();

/**
 * Class representing a database connection.
 * @param {object} _db - Protected property, use inside class.
 */
class DB {
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
        return new Promise((resolve, reject) => {
            this._db.close((err) => {
                if (err) {
                    reject(err.message);
                }
                resolve(true);
            });
        });
    }

    /**
     * @method all
     * @param {string} table - Name of table in database.
     * @return {array} All data from table.
     * @description Get all data from selecte table in database.
     */
    all(table) {
        return new Promise((resolve, reject) => {
            const query = `SELECT * FROM ${table}`;
            this._db.all(query, [], (err, rows) => {
                if (err) {
                    reject(err.message);
                }
                resolve(rows);
            });
        });
    }

    /**
     * @method getOne
     * @param {string} tableName - Name of table.
     * @param {string} param - Column name in the table with given data.
     * @return {object} One row from table.
     * @description Get one row data from table.
     */
    getOne(tableName, param) {
        return new Promise((resolve, reject) => {
            const query = `SELECT * FROM ${tableName} WHERE ${param}`;
            this._db.get(query, [], (err, row) => {
                if (err) {
                    reject(err.message);
                }
                resolve(row);
            });
        });
    }

    /**
     * @method insertRow
     * @param {string} table - Name of table and column in table.
     * @param {string} values - Values for insert to table.
     * @return {boolean} Return true or error.
     * @description Insert one row into the table.
     */
    insertRow(table, values) {
        return new Promise((resolve, reject) => {
            const sql = `INSERT INTO ${table} VALUES(${values})`;
            this._db.run(sql, [], err => {
                if (err) {
                    reject(err.message);
                }
                resolve(true);
            });
        });
    }

    /**
     * @method createTable
     * @param {string} table - Name of created table.
     * @param {string} params - Columns name and parameters.
     * @return {boolean} Return true or error.
     * @descriptioin Create new table in database.
     */
    createTable(table, params) {
        return new Promise((resolve, reject) => {
            this._db.run(`CREATE TABLE ${table} (${params})`, err => {
                if (err) {
                    reject(err.message);
                }
                resolve(true);
            });
        });
    }

    /**
     * @method update
     * @param {string} sql - Raw sql query.
     * @description Set new value to column.
     */
    update(sql) {
        return new Promise((resolve, reject) => {
            this._db.run(sql, [], err => {
                if (err) {
                    reject(err.message);
                }
                resolve(true);
            })
        })
    }

    /**
     * @method delete
     * @param {string} tableName - Name of table.
     * @param {string} params - Options which row should be deleted.
     * @description Delete row from table.
     */
    delete(tableName, params) {
        return new Promise((resolve, reject) => {
            const sql = `DELETE FROM ${tableName} WHERE ${params}`;
            this._db.run(sql, [], err => {
                if (err) {
                    reject(err.message);
                }
                resolve(true);
            })
        })
    }
}

module.exports = DB;