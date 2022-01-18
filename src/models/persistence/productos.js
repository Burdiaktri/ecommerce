const mongoose = require ('mongoose')
const {Schema, model} = mongoose

const productosSchema = new Schema ({
    nombre: String,
    timestamp: Date,
    descripcion: String,
    codigo: Number,
    url: String,
    precio: Number,
    stock: Number

})

module.exports = model('productos', productosSchema)