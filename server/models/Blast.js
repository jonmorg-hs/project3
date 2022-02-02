const mongoose = require("mongoose");
const { Schema } = mongoose;

const blastSchema = new Schema({
  blastid: {
    type: String,
    required: true,
  },
  blastName: {
    type: String,
    required: true,
  },
});

module.exports = blastSchema;
