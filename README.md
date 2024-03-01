Got it! Here's the README.md file with the dependencies updated according to the versions specified in your package.json:

```markdown
# Bookstore API

This project is a simple Node.js application that provides CRUD (Create, Read, Update, Delete) operations for managing a bookstore using MongoDB, Mongoose, and Express.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository to your local machine:

```bash
git clone https://github.com/your-username/bookstore-api.git
```

2. Install dependencies:

```bash
cd bookstore-api
npm install
```

3. Start the server:

```bash
node server.js
```

The server will be running on `http://localhost:3000` by default.

## API Endpoints

The following API endpoints are available:

- **GET /books**: Retrieve all books.
- **GET /books/:id**: Retrieve a book by ID.
- **POST /books**: Add a new book.
- **PATCH /books/:id**: Update a book by ID.
- **DELETE /books/:id**: Delete a book by ID.

## Usage

You can use tools like Postman or cURL to interact with the API endpoints.

### Example Usage:

1. **GET /books**: Retrieve all books

```
GET http://localhost:3000/books
```

2. **GET /books/:id**: Retrieve a book by ID

```
GET http://localhost:3000/books/5f98a08d54b5e8356a0d8f61
```

3. **POST /books**: Add a new book

```
POST http://localhost:3000/books
Content-Type: application/json

{
    "title": "Book Title",
    "author": "Author Name",
    "genre": "Genre",
    "year": 2022
}
```

4. **PATCH /books/:id**: Update a book by ID

```
PATCH http://localhost:3000/books/5f98a08d54b5e8356a0d8f61
Content-Type: application/json

{
    "year": 2023
}
```

5. **DELETE /books/:id**: Delete a book by ID

```
DELETE http://localhost:3000/books/5f98a08d54b5e8356a0d8f61
```

## Dependencies

- express: ^4.18.3
- mongoose: ^8.2.0
- body-parser: ^1.19.0
