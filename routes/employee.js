const express = require("express");
const router = express.Router();
// const bcrypt = require("bcrypt");
// const User = require("../models/user");
const Employee = require("../models/employee");
// const jwt = require("jsonwebtoken");
const verifyAuth = require("../middlewares/auth");
const { json } = require("express");

router.post("/", verifyAuth, async (req, res) => {
  // res.send(req.user._id);

  try {
    // const user=await User.findOne(req.user._id)

    const newemployee = new Employee({
      name: req.body.name,
      salary: req.body.salary,
      designaion: req.body.designaion,
      city: req.body.city,
      phone_number: req.body.phone_number,
    });

    const emp = await newemployee.save();
    res.json(emp);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server error");
  }
});

router.get("/", verifyAuth, async (req, res) => {
  // res.send(req.user._id);

  try {
    // const user=await User.findOne(req.user._id)
    // req.user._id
    const employee = await Employee.find({ user: req.user._id });

    res.json(expenses);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server error");
  }
});

router.delete("/:id", verifyAuth, async (req, res) => {
  // res.send(req.user._id);

  try {
    const exp = await Employee.findById(req.params.id);
    // req.user._id
    // const expenses = await Expense.find({user:req.user._id});
    emp.remove();
    res.json({ msg: "Expense removed" });
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
