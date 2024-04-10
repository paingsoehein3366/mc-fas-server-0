const User = require('../models/user.model');
const { loginServices, createUserService,getUserServices } = require('../services/auth.service');

exports.userLoginController = loginServices(User);

exports.userCreateController = createUserService(User);
exports.getUserController = getUserServices(User);
