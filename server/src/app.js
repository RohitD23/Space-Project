const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");

const planetsRouter = require("./routes/planets.router");
const launchesRouter = require("./routes/launches.router");

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(morgan("combined"));
app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")));

app.use("/planets", planetsRouter);
app.use("/launches", launchesRouter);
app.use("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

module.exports = app;
