const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  tokens: [
    {
      token: {
        type: String,
      },
    },
  ],
});

userSchema.methods.generateAuthToken = async function () {
  try {
    let tokenG = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
    this.tokens = this.tokens.concat({ token: tokenG });
    await this.save();
    return tokenG;
  } catch (error) {
    console.log(error);
  }
};

const User = mongoose.model('user', userSchema);

module.exports = User;
