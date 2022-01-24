const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');
const req = require('express/lib/request');
const res = require('express/lib/response');


// Welcome Page
router.get('/', forwardAuthenticated, (req, res) => res.render('index'));

// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) =>
  res.render('dashboard', {
    avatar: req.user.avatar,
    coins: req.user.coins
  })
);

//play
router.get('/play', ensureAuthenticated, (req, res) =>
  res.render('play', {
    avatar: req.user.avatar,
    coins: req.user.coins
  })
);

  //konto
router.get('/konto', ensureAuthenticated, (req, res) =>
res.render('account'));

//about page
router.get('/about', (req, res) =>
res.render('about'));

//Black jack
router.get('/blackJack', ensureAuthenticated, (req, res) =>
res.render('blackJack', {
  avatar: req.user.avatar,
  coins: req.user.coins
})
);

//Store
router.get('/store', ensureAuthenticated, (req, res) =>
res.render('store', {
  avatar: req.user.avatar,
  coins: req.user.coins
})
);

//rockpaper
router.get('/rockPaper', ensureAuthenticated, (req, res) =>
res.render('rockPaper', {
  avatar: req.user.avatar,
  coins: req.user.coins
})
);
//roulette
router.get('/roulette', ensureAuthenticated, (req, res) =>
res.render('roulette', {
  avatar: req.user.avatar,
  coins: req.user.coins
})
);
//tetris
router.get('/tetris', ensureAuthenticated, (req, res) =>
res.render('tetris', {
  avatar: req.user.avatar,
  coins: req.user.coins
})
);
//1v1 gunfight
router.get('/shooter', ensureAuthenticated, (req, res) =>
res.render('shooter', {
  avatar: req.user.avatar,
  coins: req.user.coins
})
);
//snake
router.get('/snake', ensureAuthenticated, (req, res) =>
res.render('snake', {
  avatar: req.user.avatar,
  coins: req.user.coins
})
);

//user profile

router.get('/users/show', ensureAuthenticated, (req, res) =>
res.render('users/show', {
  avatar: req.user.avatar,
  coins: req.user.coins,
  email: req.user.email,
  lastName: req.user.lastName,
  firstName: req.user.firstName,
  coins: req.user.coins
})
);



module.exports = router;