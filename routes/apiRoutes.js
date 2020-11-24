// Load Data
var fs = require("fs");
var db = require("../db/db.json");
// Generate a v4 (random) id
const { v4: uuidv4 } = require('uuid');

// Routing
module.exports = function (app) {
    // API GET request to retrieve data from database
    app.get("/api/notes", function (req, res) {
        res.json(db);
    });

    // API POST to create new notes
    app.post("/api/notes", function (req, res) {
        req.body.id = uuidv4();
        var newNote = req.body
        //pushing the new note to the JSON file on memory          
        db.push(newNote);
        // write db JSON file
        fs.writeFile("./db/db.json", JSON.stringify(db), function (err) {
            if (err) throw err;
            // else send the response
            res.json(db);
        });
    });

    // API DELETE to delete notes
    app.delete("/api/notes/:id", function (req, res) {
        // id variable
        var noteID = req.params.id
        for (var i = 0; i < db.length; i++) {
            if (noteID === db[i].id) {
                db.splice(i, 1);
            };
        }
        //writing the new db with the deleted note  
        fs.writeFile("./db/db.json", JSON.stringify(db), function (err) {
            if (err) throw err;
            // else send the response
            res.json(db);
        });
    });
}