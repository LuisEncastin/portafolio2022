const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect("", {useNewUrlParser: true}, {useUnifiedTopology: true});

//Create a data schema

// const notesSchema = {
//     title: String,
//     content: String
// };

app.get("/", function(req, res){
    res.send("express is working")
});

// app.post

app.listen(3000, function(){
    console.log("port is running on 3000");
});