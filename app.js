const express = require('express');
const app = express();
const port = 8000;

const books = require('./src/routes/books');
const editorials = require('./src/routes/editorials');
app.use(express.json());

app.use('/book', books);
app.use('/editorial', editorials);

app.listen(8000, '', () => {
  console.log(`App is running on port ${port}`);
});
