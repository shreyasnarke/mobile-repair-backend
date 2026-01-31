const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload.middleware");

const { createQuotation } = require("../controllers/quotation.controller");

router.post("/", upload.array("images", 5), createQuotation);

module.exports = router;
