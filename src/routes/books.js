const router = require('express').Router();
const { books, editorials } = require('./../../dbService');
const { checkErrors } = require('../services/errors');
const {
  validateCreateBook,
  validateUpdateBook,
  validatePatchBook,
} = require('./validations/books');

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



router.post('/', validateCreateBook, (req, res, next) => {
  const data = req.body;
  const { editorialId } = data;
  editorials.findOne({ _id: editorialId }, (err, found) => {
    checkErrors({
      err,
      element: found,
      res,
      id: editorialId
    });
    books.insert(data);
    res.status(201).json();
  });
});



router.put('/:id', validateUpdateBook, (req, res, next) => {
  const data = req.body;
  const { id } = req.params;
  const { editorialId } = data;
  editorials.findOne({ _id: editorialId }, (err, found) => {
    checkErrors({
      err,
      element: found,
      res,
      id: editorialId
    });
    books.update({ _id: id }, data, (err, numReplaced) => {
      checkErrors({
        err,
        element: numReplaced,
        res,
        id,
      });
      return res.json();
    });
  });
});

router.patch('/:id', validatePatchBook, (req, res, next) => {
  const data = req.body;
  const { id } = req.params;
  const { editorialId } = data;
  if (editorialId) {
    editorials.findOne({ _id: editorialId }, (err, found) => {
      checkErrors({
        err,
        element: found,
        res,
        id: editorialId
      });
      books.findOne({ _id: id }, (err, found) => {
        checkErrors({
          err,
          element: found,
          res,
          id
        });
        books.update({ _id: id }, { ...found, ...data }, (err, numReplaced) => {
          checkErrors({
            err,
            element: numReplaced,
            res,
            id,
          });
          return res.json();
        });
      });
    });
  } else {
    books.findOne({ _id: id }, (err, found) => {
      checkErrors({
        err,
        element: found,
        res,
        id
      });
      books.update({ _id: id }, { ...found, ...data }, (err, numReplaced) => {
        checkErrors({
          err,
          element: numReplaced,
          res,
          id,
        });
        return res.json();
      });
    });
  }
});

module.exports = router;