const express = require("express");
const usercontroller = require("../controllers/users/usercontroller");
const router = express.Router();

router.get("/getusers", usercontroller);
module.exports = router;
