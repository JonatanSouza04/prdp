const mongoose = require('./database');

const Schema = mongoose.Schema;

const withdrawalSchema = new mongoose.Schema({

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

  status: {
    type: Number,
    required: true
  },  

  createdAt: {
    type: Date,
    default: Date.now
  }

})

const Withdrawal = mongoose.model('withdrawals', withdrawalSchema)

module.exports = Withdrawal

