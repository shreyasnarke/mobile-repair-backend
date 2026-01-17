const express = require("express");
const cors = require("cors");

const quotationRoutes = require("./routes/quotation.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/quotation", quotationRoutes);

module.exports = app;
