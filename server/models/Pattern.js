const mongoose = require("mongoose");
const { Schema } = mongoose;

const patternSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  blast: {
    type: String,
    required: true,
  },
  hole: {
    type: String,
    required: true,
  },
  holetype: {
    type: String,
    required: true,
  },
  collar: {
    type: String,
    required: true,
  },
  toe: {
    type: String,
    required: true,
  },
  dipped: {
    type: Number,
    required: true,
  },
  angle: {
    type: String,
    required: true,
  },
  lat: {
    type: Number,
    required: true,
  },
  lng: {
    type: Number,
    required: true,
  },
});

module.exports = patternSchema;
