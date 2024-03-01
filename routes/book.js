const express = require('express');
const router = express.Router();
const Book = require('../models/book');


// Read all books
router.get('/', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Read a books
router.get('/:id', async (req, res) => {
  try {
      const book = await Book.findById(req.params.id);
      if (!book) {
          return res.status(404).json({ message: 'Book not found' });
      }
      res.json(book);
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
});

// Create a new book
router.post('/add', async (req, res) => {
  try {
    const {title, author, genre, year} = req.body;
    const book = await Book.create({title, author, genre, year});
    res.status(201).json(book);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a book
router.patch('/add/:id', async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if(!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedBook);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a book
router.delete('/:id', async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
        return res.status(404).json({ message: 'Book not found' });
    }
    await Book.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted book' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
