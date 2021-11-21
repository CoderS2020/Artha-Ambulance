const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const authenticate = require('../middleware/authenticate');

require('../db/connection');
const User = require('../model/userSchema');
const Blog = require('../model/blogSchema');

router.get('/', (req, res) => {
  res.send('Hello from auth');
});

router.post('/signup', (req, res) => {
  const { name, username, password } = req.body;

  if (!name || !username || !password)
    return res.status(422).json({ error: 'Please fill all the details..' });

  User.findOne({ username: username })
    .then((userExist) => {
      if (userExist)
        return res.status(422).json({ error: 'Username already exists..' });

      const user = new User({ name, username, password });
      user
        .save()
        .then(() => {
          res.status(201).json({ message: 'User stored successfully' });
        })
        .catch((err) => res.status(500).json({ error: 'Failed to register' }));
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password)
      return res.status(400).json({ error: 'Please fill all details' });

    const userLogin = await User.findOne({
      username: username,
      password: password,
    });

    if (!userLogin || userLogin === null) {
      return res.status(400).json({ error: 'Invalid credentials' });
    } else {
      const token = await userLogin.generateAuthToken();
      // console.log(token);
      res.cookie('artha', token, {
        expires: new Date(Date.now() + 3600),
        httpOnly: true,
      });
      return res.status(200).json({ message: 'User signed in successfully' });
    }
  } catch (error) {
    console.log(error);
  }
});

router.get('/admin', authenticate, (req, res) => {
  console.log('admin page');
  res.send(req.rootUser);
});

//Get all blogs
router.get('/getblogs', async (req, res) => {
  try {
    const allBlogs = await Blog.find();
    console.log(allBlogs);
    if (allBlogs) {
      res.send(allBlogs);
    } else {
      return res.status(400).json({ error: 'Something went wrong...' });
    }
  } catch (error) {
    console.log(error);
  }
});

//Get single blog
router.post('/getblogdata', async (req, res) => {
  const { _id } = req.body;
  try {
    const blogData = await Blog.find({ _id });

    if (blogData) {
      res.send(blogData);
    } else {
      return res.status(400).json({ error: 'Blog not found!!' });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
