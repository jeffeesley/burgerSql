var express = require("express");

var router = express.Router();
var db = require("../models/");


router.get("/", function(req, res) {
  res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
  
  db.Burger.findAll()
  .then(function(data){
    console.log(data);
    return res.render("index", {burgers: data});
  });
});


router.post("/burgers/create", function(req, res) {
  
  db.Burger.create({
    burger_name: req.body.burger_name,
    
  }).then(function(data){
    console.log(data);

    res.redirect("/");
  });
});


router.put("/burgers/update", function(req, res) {
  db.Burger.update({
    devoured: true
  },
  {
    where: {
      id: req.body.burger_id
    }
  }).then(function(data){
    res.redirect("/");
  });
});

// router.delete("/burgers/delete/:id", function(req, res){
//   db.Burger.destroy({
//     where: {
//       id: req.params.burger_id
//     }
//   }).then(function(){
//     res.redirect("/burgers");
//   });
// });
module.exports = router;
