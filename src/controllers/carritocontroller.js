const Response = require ('../models/server/response.js') 
const {getCarrito, getProductosCarrito, createCarrito} = require('../apiServices/carritoServices')
const {options, client} = require('../services/twilio/twilio')


const listarCarrito = async (req, res, next) => {
    try{
        const message = await client.messages.create(options)
        res.send(new Response(await getCarrito(), {data: message}))

    } catch (error){
        next(error)
        console.log( err, 'Error en listar carrito')
    }
	
}

const listarProductosCarrito = async (req, res, next) => {
    const {productos} = req.params
    try{
        !getProductosCarrito()
        ? res.status(404).send(new Response('No se encuentra productos', 404))
        : res.send(new Response(await getProductosCarrito()))
       
            
    }catch (error){
        next(error)
        console.log(err, 'Error en listar productos de carrito')
    }
	
}

const crearCarrito = async (req, res, next) => {
    let data = req.body
	try {
		res.send(new Response(await createCarrito(data)))
	} catch (error) {
		next(error)
	}
}

module.exports =  {listarCarrito, listarProductosCarrito, crearCarrito}