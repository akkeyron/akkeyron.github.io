const express = require('express');
const router = express.Router();
const { createItem, readItem } = require('./dynamodb');

// read data from the database
router.get('/highscore', (req, res, next) => {
  readItem()
  .then(data => console.log(data.Items))
  .catch(error => console.log(error))
});

// put new highscore in the database
router.post('/highscore', (req, res, next) => {
  createItem(req.body)
  .then(() => console.log('data created!'))
  .catch(error => console.log(error))
});


// router.delete('/todos/:id', (req, res, next) => {
//   // delete placeholder
// });
module.exports = router;