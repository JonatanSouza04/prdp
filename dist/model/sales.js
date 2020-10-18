"use strict";const mongoose = require('./database')

const saleSchema = new mongoose.Schema({

  uuid: {
        type: String,
  },

  employee: {
    type: String,
    required: true,
  },

  product: {
    type: String,
    required: true
  },

  amount: {
    type: Number,
    required: true
  },

  createdAt: {
    type: Date,
    default: Date.now
  }

})

const Sale = mongoose.model('sale', saleSchema)

module.exports = Sale
