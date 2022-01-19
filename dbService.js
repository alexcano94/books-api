const Datastore = require('nedb');

const db = new Datastore({ filename: './database/db.json', autoload: true });

db.users = new Datastore({ filename: './database/users.json', autoload: true });
db.books = new Datastore({ filename: './database/books.json', autoload: true });
db.reviews = new Datastore({ filename: './database/reviews.json', autoload: true });
db.editorials = new Datastore({ filename: './database/editorials.json', autoload: true });

db.loadDatabase();
module.exports = db;
