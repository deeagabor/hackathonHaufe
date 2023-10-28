const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const scooterSchema = new Schema(
  {
    city: {
      type: String,
      required: true,
    },
    distance: {
      type: Number,
      required: true,
    },
    isFree: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
  { timestamps: true }
);

const Scooter = mongoose.model("Scooter", scooterSchema);

module.exports = Scooter;
