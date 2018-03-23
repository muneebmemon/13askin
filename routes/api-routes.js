// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");

module.exports = function (app) {
  app.post("/api/login", passport.authenticate("local", { failureRedirect: '/login' }), function (req, res) {
    res.send({ redirect: '/profile' });
  });

  app.post("/api/signup", function (req, res) {
    // console.log(req.body);
    db.User.create({
      email: req.body.email,
      password: req.body.password,
      name: req.body.name,
      avatar: req.body.avatar
    })
      .then(function () {
        res.redirect(307, "/profile");
      })
      .catch(function (err) {
        console.log(err);
        res.json(err);
        // res.status(422).json(err.errors[0].message);
      });
  });

  // Route for logging user out
  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  // app.get("/api/user_data", function (req, res) {
  //   if (!req.user) {
  //     // The user is not logged in, send back an empty object
  //     res.json({});
  //   } else {
  //     // Otherwise send back the user's email and id
  //     // Sending back a password, even a hashed password, isn't a good idea
  //     res.json({
  //       email: req.user.email,
  //       id: req.user.id,
  //       name: req.user.name,
  //       avatar: req.user.avatar
  //     });
  //   }
  // });

  //save new icecream to Icecream table
  app.get('/api/myicecreams', function(req,res) {
    UserId = req.session.passport.user.id;
    db.Icecream.findAll({
      where: { UserId: UserId }
    }).then(function(dbPost) {
      console.log('myicecream: ', dbPost)
      res.json(dbPost);
    });
  });

  app.post("/api/createicecreams", function(req, res) {
    // console.log(req.body);
    console.log("UserId: ", req.session.passport.user.id);
    db.Icecream.create({
      icecream_name: req.body.icecream_name,
      scoop_color: req.body.scoop_color,
      cone_color: req.body.cone_color,
      description: req.body.description,
      UserId: req.session.passport.user.id,
      canvas: req.body.canvas
    })
    .then(function(dbPost) {
      res.json(dbPost);
    });
  });
};


