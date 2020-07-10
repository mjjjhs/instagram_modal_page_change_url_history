const express = require('express');
const path = require('path');
const router = express.Router();

/* GET home page. */
router.get('/:id', function(req, res, next) {
  const {id} = req.params;
  const isInt = parseInt(id, 10);
  if(!isNaN(isInt)) {
    next();
  } else {
    next('route');
  }
}, (req, res, next) => {
  res.sendFile(path.join(__dirname, '../', 'index.html'));
});


module.exports = router;
