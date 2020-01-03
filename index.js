const DB = require('./db_class');

const db = new DB('./database/node.db');

const getTable = "users";
db.all(getTable)
	.then(response => console.log(response))
	.catch(e => console.error(e));

db.getOne("langs", "name='Andrew'")
	.then(response => console.log(response))
	.catch(e => console.error(e));

// const table = "greetings(message, author)";
// const data = "'Hello from world!', 'Dane'";
// db.insertRow(table, data)
// 	.then(() => console.log('A row has been inserted!'))
// 	.catch(e => console.error(e));

// const updateTable = "users";
// const updateColumn = "name = 'Victor'";
// const findRow = "name = 'Jone'";
// const sql = `UPDATE ${updateTable} SET ${updateColumn} WHERE ${findRow}`;
// db.update(sql)
// 	.then(() => console.log("Data was updated!"))
// 	.catch(e => console.error(e));

// const tableName = "users";
// const params = "name = 'Sara'";
// db.delete(tableName, params)
// 	.then(() => console.log("Data was deleted!"))
// 	.catch(e => console.error(e));

// const newTable = "greetings";
// const newParam = "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE, message TEXT, author TEXT";
// db.createTable(newTable, newParam)
// 	.then(result => console.log('New table has created!'))
// 	.catch(e => console.error(e));

db.dbClose()
	.then(() => console.log('Close the database connection!'))
	.catch(e => console.error(e));