const express = require('express');
const departmentRouter = require('./department.routes');
const userRouter = require('./auth.route');
const router = express.Router();

router.use('/department', departmentRouter);

router.use('/user', userRouter);

module.exports = router;