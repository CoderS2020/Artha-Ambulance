const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  author: {
    type: String,
    required: true,
  },
  title: {
    type: String,
  },
  content: {
    type: String,
  },
  url: {
    type: String,
  },
});

const Blog = mongoose.model('BLOG', blogSchema);

module.exports = Blog;
