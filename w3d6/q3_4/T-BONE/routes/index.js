var express = require('express');
var router = express.Router();
const product = require("../models/product");


 const items = [
  new Product("Dresses", 29, "4378", "Split Thigh Bodycon Dress"),
  new Product("Tops", 11, "261", " Flounce Sleeve Blouse"),
  new Product("Underwear", 15, "9768", "Own Sexy"),
  new Product("Phones",999.9, "7651", "Iphones"),
  new Product("Watches",5000, "1873", "Quartz Watches"),
  new Product("Active Wear",18, "2277", "Sports Leggings")
 ];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'T-BONE ONLINE SHOPPING', products:items });
});

module.exports = router;
