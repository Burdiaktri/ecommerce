const {Carrito} = require ('../models/ecommerce/carrito.js') 
const Response = require ('../models/server/response.js') 
// const dbCarrito = require('../models/persistence/carrito.js')

// const carrito = new Carrito()

const listarCarrito = async (req, res, next) => {
    try{
        let carrito = await dbCarrito.findAll({
            attributes: ['id', 'timestamp', 'productosid']
        })
        res.send(new Response(carrito))
    } catch (error){
        next(error)
        console.log( err, 'Error en listar carrito')
    }
	
}

const listarProductosCarrito = async (req, res, next) => {
    const {productosid} = req.params
    try{
        const carrito = await dbCarrito.findAll({
            where: {
                productid
            }
        })
        !carrito 
        ? res.status(404).send(new Response(response, 'No se encuentra usuario', 404))
        : res.send(new Response(carrito))
       
            
    }catch (error){
        next(error)
        console.log(err, 'Error en listar productos de carrito')
    }
	
}

const crearCarrito = async (req, res, next) => {
    let {timestamp, userid, productid} = req.body
	try {
		
		let carrito = await dbCarrito.create({
            timestamp,
            userid,
            productid
        })
		res.send(new Response(carrito))
	} catch (error) {
		next(error)
	}
}

module.exports =  {listarCarrito, listarProductosCarrito, crearCarrito}