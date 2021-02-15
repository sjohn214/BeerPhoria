var express = require("express");
var router = express.Router();
var beer = require("../models/beer.js");

// router.post("/beers/create", async (req, res) => {
//   beer.create(["brewery_name", "beer_name", "beer_style", "alcohol_content", "beer_taste", "beer_pairing", "ordered"],
//     [req.body.name, req.body.false], (result) => {
//       res.json({ result });
//     });
// });


router.post('/api/beers/create', async (req, res) => {
  // edited burger create to add in a burger_name
  const newBeer = new db.beers({
    beer_name: req.body.beer_name,
  });
  try {
    const dbBeer = await newBeer.save();
    // redirect
    res.redirect('/');
  } catch (err) {
    res.status(500).json(err);
  }
});

/////////////////////////////////////////////////////////////////////////
router.put("/beers/ordered/:id", (req, res) => {
  var condition = "id = " + req.params.id;

  beer.update({ ordered: req.body.ordered },
    condition,
    (result) => {
      res.json(result)
    }
  );
  console.log("condition", condition);
});

// Export routes for server.js to use.
module.exports = router;