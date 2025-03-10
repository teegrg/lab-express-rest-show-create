const express = require("express");
const logs = express.Router();
const logsArray = require("../models/log.js");

//INDEX
logs.get("/", (req, res) => {
  res.json(logsArray);
});

//SHOW
logs.get("/:arrayIndex", (req, res) => {
    if (logsArray[req.params.arrayIndex]) {
      res.json(logsArray[req.params.arrayIndex]);
    } else {
      res.status(404).json({ error: "Not Found" });
    }
  });
  

// CREATE
logs.post("/", (req, res) => {
    logsArray.push(req.body);
    res.json(logsArray[logsArray.length - 1]);
  });
  
// DELETE
logs.delete("/:arrayIndex", (req, res) => {
  if (logsArray[req.params.arrayIndex]) {
    const deletedBookMark = logsArray.splice(req.params.arrayIndex, 1);
    res.status(200).json(deletedBookMark);
  } else {
    res.status(404).json({ error: "Not Found" });
  }
});

// UPDATE
logs.put("/:arrayIndex", (req, res) => {
  if (logsArray[req.params.arrayIndex]) {
    logsArray[req.params.arrayIndex] = req.body;
    res.status(200).json(logsArray[req.params.arrayIndex]);
  } else {
    res.status(404).json({ error: "Not Found" });
  }
});

  
module.exports = logs;