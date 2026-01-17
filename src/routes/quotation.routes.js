const express = require("express");
const router = express.Router();

const { createQuotation } = require("../controllers/quotation.controller");

router.post("/", createQuotation);

module.exports = router;
