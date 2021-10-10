var express = require('express')
var app = express()
const axios = require('axios').default;

const hostname = 'localhost';
const port = 8080;


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
  });




app.listen(8080, (error) => {
    if (error) {
      console.log(error);
    }
    console.log("The server is running on port", 8080);
  });