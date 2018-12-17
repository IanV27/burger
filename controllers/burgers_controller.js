var PORT = process.env.PORT || 5000;
var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(req,res){        
    burger.all(function(burger_db){
      console.log(burger_db);
      res.render("index",{burger_db});
    })
})

router.put("/burger/update",function(req,res){
    burger.update(req.body.burger_id, function(result){
        console.log(result);
        res.redirect("/");
    });
});

router.post("/burger/create",function(req,res){
    burger.create(req.body.burger_name, function(result){
        res.redirect("/");
    })
})

module.exports = router;