require('dotenv/config');

const mongoose = require('mongoose');

const connectionString = process.env.APP_MONGO

mongoose.connect(connectionString, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true, useNewUrlParser: true })
mongoose.Promise = global.Promise

module.exports = mongoose
