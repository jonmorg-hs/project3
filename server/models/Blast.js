const mongoose = require("mongoose");
const { Schema } = mongoose;

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
const blastSchema = new Schema({
  // saved book id from GoogleBooks
  blastId: {
    type: String,
    required: true,
  },
  blastName: {
    type: String,
    required: true,
  },
});

module.exports = blastSchema;
