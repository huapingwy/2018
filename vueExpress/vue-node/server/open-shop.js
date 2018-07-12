const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/serve')

mongoose.connection.on('connected', function () {
  console.log('connection success')
})
mongoose.connection.on('error', function () {
  console.error('connection error')
})
mongoose.connection.on('disconnected', function () {
  console.log('connection disconnected')
})

const Schema = mongoose.Schema

const newSchema = new Schema({
  name: { type: String },
  logo: { type: String }
})

const openShop = mongoose.model('shop', newSchema)

module.exports = openShop
