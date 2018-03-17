var router = require('express').Router();

// route to the homepage (login)
router.get('/' , function(req,res) {
   res.render('home');
});

module.exports = router;