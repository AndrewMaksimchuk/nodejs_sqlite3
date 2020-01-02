const DB = require('./db_class');

const db = new DB('./database/node.db');

db.all("users")
	.then(a => console.log(a))
	.catch(e => console.error(e));

db.getOne("langs", "name='Andrew'")
	.then(response => console.log(response))
	.catch(e => console.error(e));

const table = "greetings(message, author)";
const data = "'Hello from world!', 'Dane'";
db.insertRow(table, data)
	.then(result => console.log('A row has been inserted!'))
	.catch(e => console.error(e));

const newTable = "greetings";
const newParam = "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE, message TEXT, author TEXT";
// db.createTable(newTable, newParam)
// 	.then(result => console.log('New table has created!'))
// 	.catch(e => console.error(e));

db.dbClose().then(response => console.log('Close the database connection!')).catch(e => console.error(e));