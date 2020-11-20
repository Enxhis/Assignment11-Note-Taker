// Load Data
var fs = require("fs");
var notesDatabase = require("..db/db.json");

// Routing
module.exports = function(app){
    // API GET request to retrieve data from database
    app.get("/api/notes", function(req, res){
        res.json(notesDatabase);
    });

    // API POST to create new notes
    app.post("/api/notes", function(req, res){
        res.json(true);
    });

    // API DELETE to delete notes
    app.delete("/api/notes/:id", function(req, res){
        res.send("DELETE request");
    })
}