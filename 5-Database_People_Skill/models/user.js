'user strict'

const mongoose = require('mongoose');

let Schema = mongoose.Schema

let userSchema = new Schema({
  name: {type: String, require: true},
  skills: [{
    skill: String,
    value: String
  }]
}, { timestamps: true })

let User = mongoose.model('Users', userSchema)

module.exports = User
