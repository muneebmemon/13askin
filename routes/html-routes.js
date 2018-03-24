var path = require("path");
var db = require("../models");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
//   app.get("/", function(req, res) {
//     // If the user already has an account send them to the members page
//     if (req.user) {
//       res.redirect("/members");
//     }
//     res.sendFile(path.join(__dirname, "../public/login.html"));
//   });

app.get("/", function(req, res) {
  // If the user already has an account send them to the members page
  res.render('home')
});


  app.get("/login", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.render('profile');
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/profile", isAuthenticated, function(req, res) {
    console.log(req.email)
    db.Icecream.findAll({
        where: {
          email: req.user.email
        }
      }).then(function(icecreams) {
        res.render('profile' , {user: req.user, data: icecreams});    
      });
  });

  app.get("/add", isAuthenticated, function(req, res) {
    console.log(req.session)
    res.render("add");
  });

  app.get("/edit", isAuthenticated, function(req, res) {
    res.render("edit");
  });
};
