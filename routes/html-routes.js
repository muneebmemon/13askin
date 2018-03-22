var path = require("path");

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
  console.log('rendering home')
  res.render('home')
});


  app.get("/login", function(req, res) {
    // If the user already has an account send them to the members page
    console.log("login page")
    if (req.user) {
      res.render('profile');
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/profile", isAuthenticated, function(req, res) {
    console.log('rendering profile... ')
    // console.log('profile isauth : ', isAuthenticated)
    res.render('profile' , {user: req.user});
  });

  app.get("/add", isAuthenticated, function(req, res) {
    res.render("add");
  });

  app.get("/edit", isAuthenticated, function(req, res) {
    res.render("edit");
  });
};
