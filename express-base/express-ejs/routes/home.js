var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/home', function(req, res, next) {
  	var user={
                username:'admin',
                password:'admin'
        }
        res.render('home', { title: 'Home',user: user});
});

module.exports = router;
