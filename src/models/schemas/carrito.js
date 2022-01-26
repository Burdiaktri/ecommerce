const mongoose = require ('mongoose')
const {Schema, model} = mongoose

const carritoSchema = new Schema ({
    userId: {type: String},
    productos: [{
        productosId: {type: String},
        quantity: {type: Number}
    }]
})

const dbCarrito = model('carrito', carritoSchema)
module.exports = dbCarrito