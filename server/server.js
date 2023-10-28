const express = require("express");
const mongoose = require("mongoose");
const Scooter = require("./models/scooter");
const bodyParser = require("body-parser");

const app = express();
const cors = require("cors");
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(async (req, res, next) => {
  const dbURI =
    "mongodb+srv://andreeacgabor:Deeamongodb1612@hackathonhaufe.dhnyw7u.mongodb.net/hackathon-haufe?retryWrites=true&w=majority";

  await mongoose.connect(dbURI);
  next();
});

app.get("/all-scooters", async (req, res) => {
  try {
    const scooters = await Scooter.find();
    res.json(scooters);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/add-scooter", async (req, res) => {
  const scooter = req.body.newScooter;
  try {
    const newScooter = await Scooter.create({
      city: scooter.city,
      distance: scooter.distance,
    });
    res.status(201).json(newScooter);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.patch("/edit-scooter/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updates = req.body.isFree;

    console.log(updates);
    const updatedScooter = await Scooter.findByIdAndUpdate(id, {
      isFree: updates,
    });

    if (!updatedScooter) {
      return res.status(404).json({ message: "Scooter not found" });
    }

    res.json({ message: "Scooter updated", updatedScooter });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.delete("/delete-scooter/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deletedScooter = await Scooter.findByIdAndRemove(id);
    if (!deletedScooter) {
      return res.status(404).json({ message: "Scooter not found" });
    }
    res.json({ message: "Scooter deleted", deletedScooter });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(4001);
