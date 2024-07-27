const express = require("express");
const getproductcontroller = require("../controllers/products/getproductcontroller");
const router = express.Router();

router.get("/", getproductcontroller);
router.get("/id/:id", getproductcontroller);
router.get("/category/:category", getproductcontroller);
router.get("/subcategory/:subcategory", getproductcontroller);
router.get("/name/:name", getproductcontroller);
router.get("/random", getproductcontroller);
router.get("/lowtohigh", getproductcontroller);
router.get("/category/:category/lowtohigh", getproductcontroller);
router.get("/category/:category/hightolow", getproductcontroller);
module.exports = router;
