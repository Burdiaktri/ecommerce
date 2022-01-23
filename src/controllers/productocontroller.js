const Response = require ('../models/server/response.js')
const {dbProducto} = require ('../models/persistence/productos.js')
const logger = require('../log4js/logs')

const listarProductos = async (req, res, next) => {
    try {
	    let response = await dbProducto.find({})
        response
            ? res.send(new Response(response))
            : res.status(404).send(new Response(response, 'producto no encontrado', 404 ))
    
    } catch (error){
        next(error)
        logger.error('Error en listar productos')
 
    }
	
}
const agregarProductos = async (req, res, next) => {
    const {id, nombre,  descripcion, codigo, url, precio, stock} = req.body
        try {
            const producto = await dbProducto.create({
                id, 
                nombre,
                descripcion, 
                codigo, 
                url, 
                precio, 
                stock
            })
         
            res.send(new Response(producto))
    
        } catch (error) {
            next(error)
            logger.error('Error en agregar productos')
        }

}

const actualizarProductos = async (req, res, next) => {
    const { id } = req.params
    const {nombre, descripcion, codigo, url, precio, stock} = req.body
    try {
       const producto = await dbProducto.findById(id)
       const updatedProduct = await dbProducto.updateOne({nombre, descripcion, codigo, url, precio, stock})
    updatedProduct
        ? res.send(new Response(updatedProduct))
        : res.status(404).send(new Response('Producto no encontrado', 404))
    
        }catch (error){
            logger.error('Error en actualizar productos')
            next(error)
        } 
}

const borrarProductos = async (req, res, next) => {
        const { id } = req.params
        try{
            const producto = await dbProducto.findOneAndDelete({id})
    
            producto
                ? res.send(new Response(producto))
                : res.status(404).send(new Response('producto no encontrado', 404))
            
        } catch(error){
            logger.error('Error en borrar productos')
            next(error)
        }
}

module.exports = {listarProductos, agregarProductos, actualizarProductos, borrarProductos} 