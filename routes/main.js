var router = require('express').Router();

// route to the homepage
router.get('/' , function(req,res) {
   res.render('home');
});

// route to the login
router.get('/login' , function(req,res) {
   res.render('login');
});


module.exports = router;