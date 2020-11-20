// Dependencies
var path = require("path");

// Routing
module.exports = function(app){
    // HTML GET requests
    // Route to notes
    app.get("/notes", function(req, res){
        res.sendFile(path.join(__dirname, "../Develop/public/notes.html"));
    });

    // Route to homepage
    app.get("*", function(req, res){
        res.sendFile(path.join(__dirname, "../Develop/public/index.html"));
    });

}