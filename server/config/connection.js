const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/blastholes", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

console.log(mongoose.connection.readyState);

console.log("MongoDB connected!!");

module.exports = mongoose.connection;
