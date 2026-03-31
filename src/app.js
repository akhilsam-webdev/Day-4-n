const express = require("express");

const app = express();
app.use(express.json());

const notes = [];

app.post("/create-note", (req, res) => {
  notes.push(req.body);

  res.send("note created suff");
});

app.get("/all-notes", (req, res) => {
  res.send(notes);
});

app.delete("/delete-note/:index", (req, res) => {
  delete notes[req.params.index];
  res.send("note deleted suff");
});

app.patch("/update-note/:index", (req, res) => {
  notes[req.params.index].discription = req.body.discription;

  res.send("note updated suff");
});

app.put("/update-all/:index", (req, res) => {
  notes[req.params.index] = req.body;

  res.send("updated all note");
});
module.exports = app;
