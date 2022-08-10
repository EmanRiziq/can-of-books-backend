'use strict';

require('dotenv').config();
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
app.use(cors());
app.use(express.json())
const PORT = process.env.PORT || 3001;
app.get('/test', (request, response) => {
  response.send('test request received')
})
app.get('/book', handleGetBooks);
app.post('/book', createNewBook);
app.delete('/book/:id', deleteBook);


function handleGetBooks(req, res) {
  bookModel.find({}, (error, data) => {
    if (error) console.log(`error reading from the db: ${error}`);
    else res.send(data);
  })
}

function createNewBook(req, res) {
  const { newBook } = req.body;
  const book = new bookModel(newBook);
  book.save();
  res.status(201).json(book);
}

function deleteBook(req, res) {
  const id = req.params.id;
  bookModel.findByIdAndDelete(id).then(record => {
    res.send(record);
  }).catch(err => {
    res.status(500).send(err.message);
  })
}

mongoose.connect('mongodb://127.0.0.1:27017/booksDB');
// const booksSchemachema = require('./modules/booksSchema')
const bookModel = require('./modules/bookModel')

app.listen(PORT, () => console.log(`listening on ${PORT}`));
