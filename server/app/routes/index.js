var express = require('express');
var app = express.Router();
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb+srv://786:786@cluster0.gtata.mongodb.net/?retryWrites=true&w=majority";
;
var bodyParser  = require('body-parser');
var multer = require('multer');
var upload = multer();

app.use(bodyParser.json());
var movies = [
  {id: 101, name: "Fight Club", year: 1999, rating: 8.1},
  {id: 102, name: "Inception", year: 2010, rating: 8.7},
  {id: 103, name: "The Dark Knight", year: 2008, rating: 9},
  {id: 104, name: "12 Angry Men", year: 1957, rating: 8.9}
];




app.post('/',function(req,res){
  const person = {firstname:req.body.firstname,lastname:req.body.lastname,email:req.body.email,phone:req.body.phone};
  console.log(req.body);
  MongoClient.connect(url,function(err,db){
    if(err) throw err;
    var dbo = db.db("mybd");
  dbo.collection("customers").insertOne(person,function(err,res){
    if(err) throw err;
    console.log(person );
    console.log("data added");

    });
    res.send("");
    db.close();

    
  });
  


});


module.exports = app;



