const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

//
// Este é o editado para servir o curso de React da Alura
const ProductSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

ProductSchema.plugin(mongoosePaginate)

mongoose.model('Product', ProductSchema)
