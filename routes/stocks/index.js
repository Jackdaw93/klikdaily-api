const express = require("express");
const router = express.Router();

const { getAllStocks } = require("./controller");

router.get("/stocks", getAllStocks);

module.exports = router;
