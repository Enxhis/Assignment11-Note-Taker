// Load Data
var fs = require("fs");
var db = require("../Develop/db/db.json");
// Generate a v4 (random) id
const { v4: uuidv4 } = require('uuid');

// Routing
module.exports = function(app){
    // API GET request to retrieve data from database
    app.get("/api/notes", function(req, res){
        res.json(db);
    });

    // API POST to create new notes
    app.post("/api/notes", function(req, res){
        // use of UUID
        req.body.id = uuidv4();
        var newNote = req.body;
        db.push(newNote);
        // write db JSON file
        fs.writeFile("../Develop/db/db.json", JSON.stringify(db), function(err){
            if (err) throw err;
            // send response
            res.json(db);
        })
    });

    // API DELETE to delete notes
    app.delete("/api/notes/:id", function(req, res){
        var notesID = req.params.id;
        for(var i = 0; i < db.length; i++){
            if(db[i].id === notesID){
                db.slice(i, 1);
            }
        }
        // writing new db
        fs.writeFile("../Develop/db/db.json", JSON.stringify(db), function(err){
            if (err) throw err;
            res.json(db);
        });
    });
    app.get("/api/notes", function(req, res) {
        return res.sendFile(path.json(__dirname, "../Develop/db/db.json"));
      });
}