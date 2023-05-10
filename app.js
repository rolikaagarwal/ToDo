const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"))
app.set("view engine", "ejs");
var items= ["buy food","cook food","eat food"];

app.get("/", function (req, res) {
 
var today = new Date();
var options = {
    weekday: "long",
    day: "numeric",
    month: "long"
};
var day= today.toLocaleDateString("en-US", options);
res.render("list", {kindOfday: day ,newItem:items})

});

app.post("/", function(req,res){
    var item = req.body.newItem;
    items.push(item);
    console.log(item);
    res.redirect("/");
})

app.listen(3000, function () {
  console.log("Server is running");
});
