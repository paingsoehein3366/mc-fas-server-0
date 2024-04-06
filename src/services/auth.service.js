require('dotenv').config();
exports.loginServices = Module => async (req, res) => {
      try {
            const { email, password } = req.body;
            if (!email && !password) return res.status(400).json({ message: "Invalid!" });
            const checkEmail = await Module.find({ email });

            res.status(200).json({ status: "success" });
      } catch (error) {
            res.status(404).json({
                  status: "fail",
                  message: error.message
            })
      }
};
exports.createUserService = Module => async (req, res) => {
      try {
            const { name, email, password, jobLabel, permission,department } = req.body;
            if (!name && !email && !password && !jobLabel) return res.status(400).json({ message: 'Invalid!' });

            const checkEmail = await Module.find( {email} );
            console.log("checkEmail: ", checkEmail);
            if (checkEmail.length) return res.status(400).json({ message: "already user!" });

            console.log("userInfo: ", req.body);
            const user = await Module.create({ name, email, password, jobLabel, permission, department });
            console.log("user: ", user);
            res.status(200).json({ status: "success" });
      } catch (error) {
            res.status(404).json({
                  status: "fail",
                  message: error.message
            })
      }
}