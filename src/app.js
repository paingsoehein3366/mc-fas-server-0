const express = require('express');
const { loadContainers } = require('./container');
const router = require('./routes/index');
const { createDepartment } = require('./services/department.service');
const app = express();

loadContainers()

app.use(express.json());
app.use('/api/', router);

module.exports = app;