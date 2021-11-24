const mongoose = require('mongoose');

const corporateSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  company: {
    type: String,
  },
  position: {
    type: String,
  },
  requirement: {
    type: String,
  },
});

const Blog = mongoose.model('corporate', corporateSchema);

module.exports = Blog;
