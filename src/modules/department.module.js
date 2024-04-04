const mongoose = require('mongoose');

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

module.exports = mongoose.model('Department', departmentSchema);