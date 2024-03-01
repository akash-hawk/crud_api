const express = require('express');
const router = express.Router();
const Book = require('../models/book');


// Read all books
router.get('/', async (req, res) => {
  res.render('./views/index.ejs');
});

module.exports = router;