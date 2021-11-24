const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const authenticate = require('../middleware/authenticate');
const nodemailer = require('nodemailer');

require('../db/connection');
const User = require('../model/userSchema');
const Blog = require('../model/blogSchema');
const Corporate = require('../model/corporateSchema');
const Contact = require('../model/contactSchema');

//For sending emails
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

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
        expires: new Date(Date.now() + 100000000),
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

router.get('/logout', (req, res) => {
  res.clearCookie('artha', { path: '/' });
  res.status(200).send('Admin is logged out!!');
});

//Get all blogs
router.get('/getblogs', async (req, res) => {
  try {
    const allBlogs = await Blog.find();
    // console.log(allBlogs);
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

//Save Blog
router.post('/saveblog', async (req, res) => {
  const { author, title, url, content } = req.body;

  if (!url) {
    return res.status(422).json({ error: 'Something went wrong!!' });
  }

  try {
    const blogInfo = new Blog({ author, title, content, url });

    await blogInfo.save();

    return res.status(201).json({ message: 'Blog Saved successfully' });
  } catch (error) {
    console.log(error);
  }
});

//Deleting the blog
router.post('/deleteblog', async (req, res) => {
  const { blogid } = req.body;

  try {
    const blogData = await Blog.findByIdAndDelete({ _id: blogid });

    if (blogData) {
      return res.status(201).json('Deleted successfully!');
    } else {
      return res.status(400).json({ error: 'Blog not found!!' });
    }
  } catch (error) {
    console.log(error);
  }
});

//Update Blog
router.post('/updateblog', async (req, res) => {
  const { id, author, title, url, content } = req.body;

  try {
    const blogData = await Blog.findOneAndUpdate(
      { _id: id },
      { author, title, content, url },
      { new: true }
    );
    // User.findOneAndUpdate({ email: email }, { author, title, content, url }, { new: true });

    if (blogData) {
      return res.status(201).json('Updated successfully!');
    } else {
      return res.status(400).json({ error: 'Something went wrong!!' });
    }
  } catch (error) {
    console.log(error);
  }
});

//Corporate page form
router.post('/corporatedetails', async (req, res) => {
  const { name, email, phone, company, position, requirement } = req.body;

  if (!email || !phone || !name || !company || !position || !requirement) {
    return res.status(422).json({ error: 'Please fill all the details...' });
  }

  try {
    const corporateInfo = new Corporate({
      name,
      email,
      phone,
      company,
      position,
      requirement,
    });

    await corporateInfo.save();

    const mailOptions = {
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: 'Corporate Page - Artha Ambulance',
      html: `
      <h2>Following are the details of corporate page form submission"-</h2> <br/>
      Name:-${name} <br/>
      Email:-${email}<br/>
      Phone:-${phone}<br/>
      Company:-${company}<br/>
      Position:-${position}<br/>
      Requirement:-${requirement}<br/>

      `,
    };

    transporter.sendMail(mailOptions, function (err, info) {
      if (err) {
        console.log('Error sending message: ' + err);
      } else {
        // no errors, it worked
        console.log('Message sent succesfully.');
      }
    });

    return res.status(201).json({ message: 'You contacted us successfully' });
  } catch (error) {
    console.log(error);
  }
});

//Contact Page form
router.post('/contactdetails', async (req, res) => {
  const { name, email, phone, message } = req.body;
  console.log(name, email, phone, message);

  if (!email || !phone || !name || !message) {
    return res.status(422).json({ error: 'Please fill all the details...' });
  }

  try {
    const contactInfo = new Contact({
      name,
      email,
      phone,
      message,
    });

    await contactInfo.save();

    const mailOptions = {
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: 'Contact Page - Artha Ambulance',
      html: `
      <h2>Following are the details of contact page form submission"-</h2> <br/>
      Name:-${name} <br/>
      Email:-${email}<br/>
      Message:-${message}<br/>
      
      `,
    };

    transporter.sendMail(mailOptions, function (err, info) {
      if (err) {
        console.log('Error sending message: ' + err);
      } else {
        // no errors, it worked
        console.log('Message sent succesfully.');
      }
    });

    return res.status(201).json({ message: 'You contacted us successfully' });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
