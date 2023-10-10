const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.status(200).send("Hello World!");
});

module.exports = app;

/*
Separate your app and server
The reason behind this is that it won’t 
listen to the port after testing.
*/