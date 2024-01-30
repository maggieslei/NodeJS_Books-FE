const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('home', { pagename: 'Home' });
});

router.get('/about', (req, res) => {
  res.render('about', { pagename: 'About' });
});

router.get('/register', (req, res) => {
  res.render('register', { pagename: 'Register' });
});

router.post('/register', (req, res) => {
  console.log('Registering');
  res.render('home', { pagename: 'Home' });
});

router.get('/login', (req, res) => {
  res.render('login', { pagename: 'Login' });
});

router.post('/login', (req, res) => {
  console.log('logging in');
  res.render('about', { pagename: 'About' });
});

module.exports = router;
