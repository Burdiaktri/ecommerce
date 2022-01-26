const dbCarrito = require('../models/schemas/carrito.js')

const getCarrito = async () => {
    let carrito = await dbCarrito.find({})
    return carrito
}

const getProductosCarrito = async () => {
    const carrito = await dbCarrito.findAll({})
    return carrito
}

const createCarrito = async (data) => {
    let {userId, productosId} = data
    let carrito = await dbCarrito.create({userId, productosId})
    return carrito
}
module.exports = {getCarrito, getProductosCarrito, createCarrito}