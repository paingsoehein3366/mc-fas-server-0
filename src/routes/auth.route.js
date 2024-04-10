const userRouter = require('express').Router();
const { container } = require('../container');
const { userController,userCreateController,getUserController } = require('../controllers/auth.controller');

userRouter.get('/get', getUserController);

userRouter.post('/create', userCreateController);

// userRouter.post('/login',container.resolve(''))

module.exports = userRouter;