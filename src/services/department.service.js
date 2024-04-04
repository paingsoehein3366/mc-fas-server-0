const departmentSchema = require('../modules/department.module')


exports.createDepartment = async (req, res) => {
      try {
            console.log("values: ",req.body);
            const checkUser = await departmentSchema.find(req.body);
            if (checkUser.length) return res.status(401).json({ message: "already user" });
            console.log("checkUser: ", checkUser);
            const { name, type, departmentId } = req.body;            
            await departmentSchema.create({name,type,departmentId});

            res.status(200).json({ message: checkUser });
      } catch (error) {
            res.status(400).json({
                  status: "fail",
                  message: error.message
            })
      }
};
