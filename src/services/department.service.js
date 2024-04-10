const { catchAsync } = require("../utils/catchAsync");

exports.createDepartment = Model => catchAsync(async (req, res, next) => {
      const checkUser = await Model.find(req.body);
      if (checkUser.length) return res.status(401).json({ message: "already user" });
      
      const dots = await Model.create(req.body);
      res.status(200).json({ message: "dots" });
});

exports.getDepartment = Model => catchAsync(async (req, res, next) => {
      const department = await Model.find();
      if (!department) return res.status(404).json({ status: "fail", message: department });
      res.status(200).json({
            status: "success",
            data: department
      });
});