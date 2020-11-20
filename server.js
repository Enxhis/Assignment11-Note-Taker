// Dependencies
var express = require("express");

// Create app
var app = express();

// Set Port
var PORT = process.env.PORT || 8080;

// Set up Express app to handle data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// Router 
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Listener to start server
app.listen(PORT, function(){
    console.log("Application listening on PORT: " + PORT);
});