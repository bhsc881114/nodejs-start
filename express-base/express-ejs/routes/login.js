
var express = require('express');
var router = express.Router();

router.get('/login', function(req, res, next) {
	res.render('login', { title: '用户登陆'});
});

router.post('/login', function(req, res, next) {
	  var user={
                username:'admin',
                password:'admin'
        }
        if(req.body.username===user.username && req.body.password===user.password){
                res.redirect('/home');
        }
        res.redirect('/login');
});

router.get('/logout', function(req, res, next) {
  res.redirect('/');
});

module.exports = router;
