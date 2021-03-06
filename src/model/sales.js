const mongoose = require('./database');

const Schema = mongoose.Schema;

const saleSchema = new mongoose.Schema({

  products:  { 
    type: Schema.Types.ObjectId, 
    ref: 'products',
    required: true 
   },

  employees: {
    type: Schema.Types.ObjectId,
    ref: 'employees',
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
