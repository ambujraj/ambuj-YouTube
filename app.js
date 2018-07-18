const express = require('express');
const app = express();
const request = require('request');
app.set("view engine", "ejs");
app.get("/", function(req, res){
    res.render("landing");
});
app.get("*", function(req, res){
    res.redirect("/");
});
app.listen(process.env.PORT || 8000, function(){
   console.log("Server Started");
});