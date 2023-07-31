const express = require("express");
const router = express.Router();

const { main, alterUser } = require("../controllers/app.controller");
const { sayHello, sayWilders } = require("../middlewares/app.middleware");

router.get("/", sayHello, sayWilders, main);

router.get("/error", alterUser);

module.exports = router;
