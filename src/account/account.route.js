const express = require("express");
const router = express.Router();
const accountController = require("./account.controller");

router.get("/signin", accountController.getSignin);

module.exports = router;
