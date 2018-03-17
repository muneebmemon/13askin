var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mainRoutes = require('./routes/main');

// setting up express app
var app = express();

// setting up port
const PORT = process.env.PORT || 3000;

// setting up ejs as view engine
app.set("view engine", "ejs");

// setting up middleware to serve static files
app.use(express.static(path.join(__dirname , 'public')));

// setting up body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// setting up app to use route
app.use('/' , mainRoutes);

// listening to port
app.listen(PORT , () => {
    console.log(`Listening to Port ... ${PORT}`);
});