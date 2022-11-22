var express = require("express");
var router = express.Router();
const product = require("../module/product");
const path = require("path");

router.use("views",express.static(path.join(__dirname,"views")));

let cartItems=[];
let items = [
  new product("2345", "Dresses", 30, "Thigh Bodycon Dress!"),
  new product("9865", "Tops", 15, "Seemless Pattern Tops!"),
  new product("1876", "Lingerie", 1, "Own Sexy!"),
  new product("3501","iPhone 14",999,"Grab the new device"),
  new product("7410", "Active wear", 90, "Sports Leggings"),
];

router.get("/", (req, res) => {
  res.render("product", {
    itemList: items,
  });
});

router.get("/addToCart", (req,res) => {
  let value = req.query.pId;
  let itemInCart = items.filter(item=>item.id==value)[0];
  cartItems.push(itemInCart);
  res.redirect("/")
});

router.post("/shoppingCart", (req, res) => {
  res.render("shoppingcart",{
      itemsInCart:cartItems
  })
});
module.exports = router;