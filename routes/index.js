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
    name: req.user.name,
    coins: req.user.coins
  })
);

//play
router.get('/play', ensureAuthenticated, (req, res) =>
  res.render('play', {
    name: req.user.name,
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
  name: req.user.name,
  coins: req.user.coins
})
);

//Store
router.get('/store', ensureAuthenticated, (req, res) =>
res.render('store', {
  name: req.user.name,
  coins: req.user.coins
})
);

//rockpaper
router.get('/rockPaper', ensureAuthenticated, (req, res) =>
res.render('rockPaper', {
  name: req.user.name,
  coins: req.user.coins
})
);
//roulette
router.get('/roulette', ensureAuthenticated, (req, res) =>
res.render('roulette', {
  name: req.user.name,
  coins: req.user.coins
})
);
//tetris
router.get('/tetris', ensureAuthenticated, (req, res) =>
res.render('tetris', {
  name: req.user.name,
  coins: req.user.coins
})
);
//1v1 gunfight
router.get('/shooter', ensureAuthenticated, (req, res) =>
res.render('shooter', {
  name: req.user.name,
  coins: req.user.coins
})
);
//snake
router.get('/snake', ensureAuthenticated, (req, res) =>
res.render('snake', {
  name: req.user.name,
  coins: req.user.coins
})
);



module.exports = router;