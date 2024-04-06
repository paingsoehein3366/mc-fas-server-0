const express = require('express');
const { get } = require('mongoose');
const { createDepartmentController } = require('../controllers/department.controller');
const departmentRouter = express.Router();

departmentRouter.post('/', createDepartmentController);

module.exports = departmentRouter;