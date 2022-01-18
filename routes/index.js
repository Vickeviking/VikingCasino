const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

// Welcome Page
router.get('/', forwardAuthenticated, (req, res) => res.render('index'));

// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) =>
  res.render('dashboard', {
    name: req.user.name
  })
);

//play
router.get('/play', ensureAuthenticated, (req, res) =>
  res.render('play'));

  //konto
router.get('/konto', ensureAuthenticated, (req, res) =>
res.render('account'));

//about page
router.get('/about', (req, res) =>
res.render('about'));



module.exports = router;