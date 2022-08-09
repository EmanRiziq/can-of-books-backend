'use strict';

require('dotenv').config();
require('dotenv').config();

const express = require('express');
const cors = require('cors');

const mongoose = require('mongoose');


const app = express();
app.use(cors());

const PORT = process.env.PORT || 3001;

app.get('/test', (request, response) => {
  response.send('test request received')
})
app.get('/books', handleGetBooks);



function handleGetBooks(req, res) {
  // send a req to the mongoDB server to recive the cats data
  bookModel.find({}, (error, data) => {
      if (error) console.log(`error reading from the db: ${error}`);
      else res.send(data);
  })
}
mongoose.connect('mongodb://127.0.0.1:27017/booksDB');
const booksSbooksSchemachema = require('./modules/booksSchema')
const bookModel = require('./modules/bookModel')

app.listen(PORT, () => console.log(`listening on ${PORT}`));
