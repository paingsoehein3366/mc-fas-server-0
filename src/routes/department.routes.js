const express = require('express');
const { get } = require('mongoose');
const { createDepartmentController, getDepartmentController } = require('../controllers/department.controller');
const departmentRouter = express.Router();

departmentRouter.post('/', createDepartmentController);
departmentRouter.get('/',getDepartmentController);

module.exports = departmentRouter;