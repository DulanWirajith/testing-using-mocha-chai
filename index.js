//import dependencies
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Handle CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "auth-token, Origin, X-Requested-With, Content-Type, Accept");
    next();
});


//Welcome route
app.get("/api/welcome", (req,res) => {
    try {
        // If something goes wrong, throw an error
        // throw new Error('Something went wrong.');

        // If all is well, send a success response
        res.status(200).json({ message: 'Request was successful.' });
    } catch (error) {
        // If an error occurs, send an error response
        res.status(500).json({ error: error.message });
    }
});

//start up server
const PORT = process.env.PORT || 4000;
app.listen(PORT, function () {
    console.log("Server is running on port:  " + PORT);
});

module.exports = app;
