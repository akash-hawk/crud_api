// server.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const booksRouter = require('./routes/book');
const Book = require('./models/book');
const { sampleBooks } = require('./data/booksData');

const app = express();
const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());

const uri = "mongodb+srv://akashgoindi:sbSHOVzOhXE7em1O@backenddev.oo87oek.mongodb.net/?retryWrites=true&w=majority&appName=BackendDev";

// async function addSampleData() {
//     try {
//         await Book.deleteMany();
//         await Book.insertMany(sampleBooks);
//         console.log('Sample data added successfully');
//     } catch (err) {
//         console.error('Error adding sample data:', err);
//     }
// }

// MongoDB Connection
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('MongoDB Connected');
    // addSampleData();
}).catch(err => console.error('MongoDB Connection Error:', err));

// Define Routes
// For example, you can define routes for CRUD operations on books

app.use('/books', booksRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});