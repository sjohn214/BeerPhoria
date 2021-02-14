// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************
// Dependencies
// =============================================================
// Requiring our models
var db = require("../models");
// Routes
// =============================================================
module.exports = function(app) {
  // GET route for getting all of the beers
  app.get("/api/beer", function(req, res) {
    var query = {};
    console.log(req.query.q);
    if (req.query.q) {
      query.beer_name = req.query.q;
      res.redirect("/beers/"+req.query.q);
    }
    // else {
    //   res.json (true);
    // }
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    // db.beer.findAll({
    //   where: query,

      
    // }).then(function(dbbeer) {
    //   res.json(dbbeer);
    //   console.log(dbbeer);
    // });
  });
  
  // Get route for retrieving a single beer
  app.get("/api/beer/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    db.beer.findOne({
      where: {
        id: req.params.id
      },
    }).then(function(dbbeer) {
      res.json(dbbeer);
    });
  });
  // beer route for saving a new beer
  // app.post("/api/beer", function(req, res) {
  //   db.beer.create(req.body).then(function(dbbeer) {
  //     res.json(dbbeer);
  //   });
  // });
  // DELETE route for deleting beers
  app.delete("/api/beer/:id", function(req, res) {
    db.beer.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbbeer) {
      res.json(dbbeer);
    });
  });
  // PUT route for updating beers
  app.put("/api/beer", function(req, res) {
    db.beer.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbbeer) {
      res.json(dbbeer);
    });
  });
};