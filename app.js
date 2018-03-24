var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mainRoutes = require('./routes/main');
var db = require('./models');
var session = require("express-session");
var passport = require("./config/passport");

// Read and set environment variables
require("dotenv").config();

// setting up express app
var app = express();

// setting up port
const PORT = process.env.PORT || 3000;

// setting up ejs as view engine
app.set('view engine', 'ejs');
app.set('views' , path.join(__dirname , 'views'));

// setting up middleware to serve static files
app.use(express.static(path.join(__dirname , 'public')));

// setting up body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// setting up app to use route
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

//app.use('/' , mainRoutes);

// synching database and listening to port
db.sequelize.sync({force:true}).then(function() {
  app.listen(PORT, function() {
    console.log(`Now listening to Port ... ${PORT}`);
  });
});