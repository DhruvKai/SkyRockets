const mongoose = require('mongoose');
const validator = require('validator');
const bcyrpt = require('bcrypt');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A user must have a name'],
  },
  email: {
    type: String,
    require: [true, 'A user must have an email'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email'],
  },
  photo: {
    type: String,
  },
  password: {
    type: String,
    required: [true, 'Please provide password'],
    minlength: 8,
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Please provide password'],
    minlength: 8,
    validate: {
      //works on create and save
      validator: function (el) {
        return el === this.password;
      },
      message: 'Passwords are not same',
    },
  },
});
//hashing the password
userSchema.pre('save', async function (next) {
  //only run when password is modified
  if (!this.isModified('password')) return next();
  //hash password with cost of 12
  this.password = bcyrpt.hash(this.password, 12);
  //delete this field
  this.passwordConfirm = undefined;
  next();
});

const User = mongoose.model('User', userSchema);
module.exports = User;
