var express = require("express");
var fs = require("fs");
var path = require("path")

//Sets up Express App
var app = express();
var PORT = 3000;

//Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Reservations array
var reservations = [];
var waitList = []

// pages endpoints - serve html
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "./mainpage.html"));
});

app.get("/table", function (req, res) {
    res.sendFile(path.join(__dirname, "./table.html"));
});

app.get("/makereservation", function (req, res) {
    res.sendFile(path.join(__dirname, "./reservation.html"))
})


// api endpoints - serve or receive data

// $.get("/api/reservations",  callback)
app.get("/api/reservations", function (req, res) {
    res.json(reservations)
})

// $.post("/api/reservations", data, callback)
app.post("/api/reservations", function (req, res) {
    
    // if is more than five push to waitList 
    reservations.push(req.body)
    res.json(reservations)
})

// Start our server
app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});