const router = require('express').Router();
const { editorials } = require('./../../dbService');
const { checkErrors } = require('./../services/errors');

router.get('/', (req, res, next) => {
  editorials.find({}, (err, editorials) => res.json(editorials));
});

router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  editorials.findOne({ _id: id }, (err, editorial) => {
    checkErrors({ element: editorial, res, err, id });
    res.json(editorial);
  });
});

router.post('/', (req, res, next) => {
  const data = req.body;
  editorials.insert(data);
  res.status(201).json();
});

router.put('/:id', (req, res, next) => {
  const data = req.body;
  const { id } = req.params;
  editorials.update({ _id: id }, data, (err, numReplaced) => {
    checkErrors({
      err,
      element: numReplaced,
      res,
      id,
    });
    return res.json();
  });
});

router.patch('/:id', (req, res, next) => {
  const data = req.body;
  const { id } = req.params;
  editorials.findOne({ _id: id }, (err, editorial) => {
    checkErrors({
      err,
      element: editorial,
      res,
      id,
    });

    editorials.update({ _id: id }, { ...editorial, ...data }, (err) => {
      checkErrors({
        err,
        res
      });
      return res.json();
    });
  });
});

router.delete('/:id', (req, res, next) => {
  const { id } = req.params;
  editorials.remove({ _id: id }, {}, (err, numRemoved) => {
    checkErrors({
      err,
      element: numRemoved,
      res,
      id,
    });
    res.json();
  });
});

module.exports = router;