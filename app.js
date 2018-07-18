const express = require('express');
const app = express();
const request = require('request');
app.set("view engine", "ejs");
app.get("/", function(req, res){
    var url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCNj8krJYML-KG22xyumvMww&type=video&key=AIzaSyA58s6f45ex23jhsW0m54CpjhD71a4bJgc';
    request(url, function(error, response, body){
        if(!error && response.statusCode == 200){
            var parse = JSON.parse(body);
            res.render("landing", {body: parse});
        }
    });
    
});
app.get("*", function(req, res){
    res.redirect("/");
});
app.listen(process.env.PORT || 8000, function(){
   console.log("Server Started");
});