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
const carritoSchema = new Schema ({
    _id: Number,
    timestamp: Date,
    productos: [{type: Schema.ObjectId, ref: 'productos'}]
})

 const dbCarrito = model('carrito', carritoSchema)
 const dbProducto = model('productos', productosSchema)
 module.exports ={dbProducto, dbCarrito}