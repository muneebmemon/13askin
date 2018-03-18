var router = require('express').Router();

// route to the homepage
router.get('/' , function(req,res) {
   res.render('home');
});

// route to the login
router.get('/login' , function(req,res) {
   res.render('login');
});

// route to the edit page
router.get('/edit' , function(req,res) {
    res.render('edit');
 });

 // route to the add page
router.get('/add' , function(req,res) {
    res.render('add');
 });

// route to the profile page
router.get('/profile' , function(req,res) {
    res.render('profile');
 });


module.exports = router;