var express = require("express");
var router = express.Router();
var beer = require("../models/beer.js");

router.get("/", (req, res) => {
  beer.all((data) => {
    var hbsObject = {
      beers: data
    };
console.log(hbsObject);
    res.render("index", hbsObject);
  });
});
//////////////////////////////////////////////////////////////////////////

router.post("/beers/create", (req, res) => {
  beer.create(["brewery_name","beer_name", "beer_style","alcohol_content","beer_taste","beer_pairing","ordered"], 
  [req.body.name, req.body. false], (result) => {
    res.json({ result });
  });
});
/////////////////////////////////////////////////////////////////////////
router.put("/beers/ordered/:id", (req, res) => {
  var condition = "id = " + req.params.id;

  beer.update({ ordered: req.body.ordered},
    condition,
    (result) => {
      res.json(result)
    }
  );
  console.log("condition",condition);
});

// Export routes for server.js to use.
module.exports = router;