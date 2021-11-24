const express = require('express');
const dotenv = require('dotenv');
const app = express();
const cookieParser = require('cookie-parser');

dotenv.config({ path: './config.env' }); //later put config.env in gitignore
const PORT = process.env.PORT;

require('./db/connection');
const User = require('./model/userSchema');
app.use(express.json()); //Using json format

app.use(cookieParser());
app.use(require('./router/auth')); //Making routes

app.listen(PORT, (req, res) => {
  console.log(`Running on port : ${PORT}`);
});
