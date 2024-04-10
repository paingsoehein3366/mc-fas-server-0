const mongoose = require('mongoose');
const Schema = require('mongoose');
const createCustomIdMiddleware = require('../middlewares/model-customld-middleware.helper');

const userSchema = mongoose.Schema({
      name: {
            type: String,
            required: true,
      },
      email: {
            type: String,
            required: true,
            unique: true
      },
      password: {
            type: String,
            required: true,
            select: false
      },
      department:{
            type:Schema.Types.ObjectId,
            ref:"Department",
            required:true
      },
      jobLabel:{
            type:String,
            required:true
      },
      permission:{
            Approve:{
                  type:Boolean,
                  default:true
            },
            Verify: {
                  type: Boolean,
                  default: true
            },
            Mention: {
                  type: Boolean,
                  default: true
            },
            Reject: {
                  type: Boolean,
                  default: true
            },
            Comment: {
                  type: Boolean,
                  default: true
            },
            EditAmout: {
                  type: Boolean,
                  default: false
            },
      }
});

userSchema.pre(
      "validate",
      createCustomIdMiddleware({
            modleName: 'User',
            prefix: "U",
            fieldName: "userId"
      })
);

const User = mongoose.model('user', userSchema);
module.exports = User;