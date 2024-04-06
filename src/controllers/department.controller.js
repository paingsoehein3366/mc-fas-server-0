const departmentSchema = require('../models/department.model');
const { createDepartment } = require('../services/department.service');

exports.createDepartmentController = createDepartment(departmentSchema);

