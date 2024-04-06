const userRouter = require('express').Router();
const { userController,userCreateController } = require('../controllers/auth.controller');

userRouter.post('/create', userCreateController);

// userRouter.post('/login', userController);

module.exports = userRouter;