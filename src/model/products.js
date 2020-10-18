const mongoose = require('./database');

const productSchema = new mongoose.Schema({

  code: {
    type: String,
    required: true,
    unique: true,
  },

  description: {
    type: String,
    required: true
  },

  amount: {
    type: Number,
    required: true
  },

  withdrawn: {
    type: Number,
    required: true
  },  

  validated: {
      type: Number,
      required: true
  },

  createdAt: {
    type: Date,
    default: Date.now
  }

})

const Product = mongoose.model('products', productSchema)

module.exports = Product

