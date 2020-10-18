"use strict";const mongoose = require('./database')

const employeeSchema = new mongoose.Schema({

  cpf: {
    type: String,
    required: true,
    unique: true,
  },

  name: {
    type: String,
    required: true
  },

  createdAt: {
    type: Date,
    default: Date.now
  }

})

const Employee = mongoose.model('employee', employeeSchema)

module.exports = Employee
