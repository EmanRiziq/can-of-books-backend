const mongoose = require('mongoose');

const booksSchema = new mongoose.Schema({
    title: String,
    description: String,
    status: Boolean
  });

  module.exports = booksSchema;