var express = require('express');
var router = express.Router();
var steemconnect = require('steemconnect');

router.get('/token', steemconnect.setToken, function (req, res) {
  res.redirect('/');
});

router.get('/*', function (req, res, next) {
  res.render('user/dashboard', { layout: 'user', title: 'Busy' });
});

module.exports = router;
