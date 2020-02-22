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
var reservations = [
    {
        name: "",
        phoneNumber: "",
        email: "",
        ID: ""
    }
];

var waitList = []
var currentReservations = [];

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "./mainpage.html"));
});
app.get("/table", function (req, res) {
    res.sendFile(path.join(__dirname, "./table.html"));
});
app.get("/makereservation", function (req, res) {
    res.sendFile(path.join(__dirname, "./reservation.html"))
})





// Start our server
app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});