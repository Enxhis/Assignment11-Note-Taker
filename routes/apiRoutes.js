// Load Data
var fs = require("fs");
var db = require("../db/db.json");
// Generate a v4 (random) id
const { v4: uuidv4 } = require('uuid');

// Routing
module.exports = function (app) {
    // API GET request to retrieve data from database
    app.get("/api/notes", function (req, res) {
        res.send(db);
    });

    // API POST to create new notes
    app.post("/api/notes", function (req, res) {
        var newNote = {
            id: uuidv4(),
            title: req.body.title,
            text: req.body.text

        };
        // push newNote to database
        db.push(newNote);
        res.send(newNote);
    });

    // API DELETE to delete notes
    app.delete("/api/notes/:id", function (req, res) {
        // id variable
        var noteID = req.params.id

        for (var i = 0; i < db.length; i++) {
            // check that the noteId matches the id in the database
            if (db[i].id === noteID) {
                let index = db.indexOf(db);
                db.splice(index, 1);
            }
            res.send(db);
        }
    });
}