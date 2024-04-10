require('dotenv').config();
const departmentSchema = require('../models/department.model');
const { catchAsync } = require('../utils/catchAsync');

exports.getUserServices = Model => catchAsync(async (req, res) => {
      const user = await Model.findOne();
      console.log("user: ", user)
      if (!user) return res.status(404).json({ message: "no user data" });
      res.status(200).json(
            {
                  status: "success",
                  message: user
            });
});

exports.loginServices = Model => catchAsync(async (req, res) => {
      const { email, password } = req.body;
      if (!email && !password) return res.status(400).json({ message: "Invalid!" });
      const checkEmail = await Model.find({ email });

      res.status(200).json({ status: "success" });
     
});
// user create service;
exports.createUserService = Model => catchAsync(async (req, res) => {
      const checkEmail = await Model.find(req.body);
            
      if (checkEmail.length) return res.status(400).json({ message: "already user!" });

      const user = await Model.create(req.body);
      console.log("user: ", user);
      res.status(200).json({ status: "success" });
});