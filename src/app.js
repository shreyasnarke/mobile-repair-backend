const express = require("express");
const cors = require("cors");
const path = require("path");

const quotationRoutes = require("./routes/quotation.routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

app.use("/api/quotation", quotationRoutes);

module.exports = app;
