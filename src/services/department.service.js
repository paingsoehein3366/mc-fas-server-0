
exports.createDepartment = Model => async (req, res) => {
      try {
            console.log("values: ",req.body);
            const checkUser = await Model.find(req.body);
            if (checkUser.length) return res.status(401).json({ message: "already user" });
            console.log("checkUser: ", checkUser);
            const { name, type } = req.body;
            const departmentData = await Model.find()
            let filterId = Object.keys(departmentData).length;
            filterId += 1;
            console.log("filterId: ", filterId);
            const departmentId = `Dp-00${filterId}`
            const dots = await Model.create({name,type,departmentId});

            res.status(200).json({ message: "dots" });
      } catch (error) {
            res.status(400).json({
                  status: "fail",
                  message: error.message
            })
      }
};
