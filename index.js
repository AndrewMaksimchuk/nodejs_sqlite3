const DB = require('./db_class');

const db = new DB('./database/node.db');
db.all("langs");
db.dbClose();

// db.run('CREATE TABLE langs(name text)');

// insert one row into the langs table
// db.run(`INSERT INTO langs(name) VALUES(?)`, ['C'], function(err) {
// 	if (err) {
// 		return console.error(err.message);
// 	}
// 	// get the last insert id
// 	console.log(`A row has been inserted with rowid ${this.lastID} and ${this.changes}`);
// });
