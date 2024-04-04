const express = require('express');
const router = require('./routes');
const { createDepartment } = require('./services/department.service');
const app = express();

app.use(express.json());

app.post("/api/department", createDepartment);

app.get('/', (req, res) => {
      res.status(200).json({
            status:"success"
      })
})

// app.use('/api/',router)

module.exports = app;