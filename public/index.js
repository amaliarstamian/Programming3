var express = require("express");
var app = express();

app.use(express.static("./"));

app.get("/", function(req, res){
   res.redirect("index.html");
});

app.listen(8888, function(){
   console.log("Example is running on port 8888");
});
