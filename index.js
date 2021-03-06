const express = require("express");

const Datastore = require("nedb");

const app = express();

const database = new Datastore("database.db");
database.loadDatabase();

const port = 4000;

app.listen(port, () => console.log("Listing at Port " + port));

app.use(express.static("public"));

// This is to limit the around of incoming data from any client.
// I this case, it is limiting the income data to 1mb.
app.use(express.json({ limit: "1mb" }));

app.post("/api", (req, res) => {
  console.log("I got a request");
  const data = req.body;
  data.timestamp = Date.now();
  database.insert(data);
  res.json(data);
});

app.get("/api", (req, res) => {
  database.find({}, (err, data) => {
    res.json(data);
  });
});
