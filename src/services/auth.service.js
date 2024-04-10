require('dotenv').config();
const { catchAsync } = require('../utils/catchAsync');
const sendSuccessRespose = require('../utils/sendSuccessResponse');

exports.getUserServices = Model => catchAsync(async (req, res) => {
      const user = await Model.findOne();
      console.log("user: ", user)
      if (!user) return res.status(404).json({ message: "no user data" });
      sendSuccessRespose({ res, user });
});

exports.loginServices = Model => catchAsync(async (req, res) => {
      const { email, password } = req.body;
      if (!email && !password) return res.status(400).json({ message: "Invalid!" });
      const checkEmail = await Model.find({ email });

      sendSuccessRespose({ res, checkEmail });
});
// user create service;
exports.createUserService = Model => catchAsync(async (req, res) => {
      const checkEmail = await Model.find(req.body);
            
      if (checkEmail.length) return res.status(400).json({ message: "already user!" });

      const user = await Model.create(req.body);
      console.log("user: ", user);
      sendSuccessRespose({ res, user });
});