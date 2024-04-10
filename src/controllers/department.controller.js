const departmentSchema = require('../models/department.model');
const { createDepartment, getDepartment } = require('../services/department.service');

exports.createDepartmentController = createDepartment(departmentSchema);

exports.getDepartmentController = getDepartment(departmentSchema);