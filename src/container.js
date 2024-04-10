const awilix = require('awilix');

// Controller
const createDepartmentControllers = require('./controllers/department.controller');
const authControllers = require('./controllers/auth.controller');
// Service
const createDepartmentService = require('./services/department.service');

// models
const departmentModel = require('./models/department.model');

const container = awilix.createContainer();

function loadControllers() {
      const controllers = {
            departmentController: awilix.asFunction(createDepartmentControllers.createDepartmentController),
            authController: awilix.asFunction(authControllers.userCreateController)
      };
      container.register(controllers);
};

function loadServices()  {
      const services = {
            departmentService: awilix.asFunction(createDepartmentService.createDepartment)
      };
      container.register(services);
};

function loadModels() {
      const models = {
            departmentModels: awilix.asValue(departmentModel)
      };
      container.register(models);
};

function loadContainers() {
      loadControllers();
      loadServices();
      loadModels();
};
module.exports = { loadContainers, container };

