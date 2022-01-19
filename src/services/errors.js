const checkErrors = ({ err, element, res, id }) => {
  if (err) {
    return res.status(500).json({ message: `Something went wrong` });
  }
  if (element === null || element === 0) {
    return res.status(404).json({ message: `Resource with id: ${id} not found` });
  }
}

module.exports = {
  checkErrors
}