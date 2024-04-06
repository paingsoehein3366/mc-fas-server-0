const User = require('../models/user.model');
const { loginServices, createUserService } = require('../services/auth.service');

// exports.userLoginController = loginServices(User);

exports.userCreateController = createUserService(User);
