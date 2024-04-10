const mongoose = require('mongoose');
const createCustomldMiddleware = require('../middlewares/model-customld-middleware.helper')

const departmentSchema = mongoose.Schema({
      name: {
            type: String,
            required: true,
            unique: true
      },
      type: {
            type: String,
            enum: ['normal', 'authorized', 'superadmin'],
            default: 'normal'
      },
       departmentId: {
             type: String,
             unique: true,
             required: true,
       }
});

departmentSchema.pre(
      "validate",
      createCustomldMiddleware({
            modleName: 'Department',
            prefix:'Dp',
            fieldName: 'departmentId'
      })
)

module.exports = mongoose.model('Department', departmentSchema);