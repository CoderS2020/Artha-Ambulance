const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  message: {
    type: String,
  },
});

const Contact = mongoose.model('contact', contactSchema);

module.exports = Contact;
