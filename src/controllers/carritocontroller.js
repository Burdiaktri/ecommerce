const {Carrito} = require ('../models/ecommerce/carrito.js') 
const Response = require ('../models/server/response.js') 
const {dbCarrito} = require('../models/persistence/productos.js')
const {options, client} = require('../twilio/twilio')


const listarCarrito = async (req, res, next) => {
    try{
        let carrito = await dbCarrito.find({})
        const message = await client.messages.create(options)
        res.send(new Response(carrito, {data: message}))

        console.log(carrito)
    } catch (error){
        next(error)
        console.log( err, 'Error en listar carrito')
    }
	
}

const listarProductosCarrito = async (req, res, next) => {
    const {productos} = req.params
    try{
        const carrito = await dbCarrito.findAll({})
        !carrito 
        ? res.status(404).send(new Response(response, 'No se encuentra usuario', 404))
        : res.send(new Response(carrito))
       
            
    }catch (error){
        next(error)
        console.log(err, 'Error en listar productos de carrito')
    }
	
}

const crearCarrito = async (req, res, next) => {
    let {timestamp, productos} = req.body
	try {
		let carrito = await dbCarrito.create({
            timestamp,
            productos
        })
		res.send(new Response(carrito))
	} catch (error) {
		next(error)
	}
}

module.exports =  {listarCarrito, listarProductosCarrito, crearCarrito}