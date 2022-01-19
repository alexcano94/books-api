const router = require('express').Router();
const { books } = require('./../../dbService');

router.get('/', (req, res, next) => {
  books.find({}, (err, books) => res.json(books));
});

router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  books.findOne({ _id: id }, (err, book) => {
    if (err) {
      res.status(500).json({ message: `Something went wrong` });
    }
    if (book === null) {
      res.status(404).json({ message: `Resource with id: ${id} not found` });
    }
    res.json(book)
  });
});

router.post('/', (req, res, next) => {
  const data = req.body;
  books.insert(data);
  res.status(201).json();
});

module.exports = router;