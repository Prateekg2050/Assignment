const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const employee = new mongoose.Schema(
  {
    name: { type: String, required: true },
    salary: { type: Number, required: true },
    designation: { type: String, required: true },
    city: { type: String, required: true },
    phone_number: { type: Number, required: true },
  },
  { collection: "employee" }
);

const model = mongoose.model("Employee", Employee);

module.exports = model;
