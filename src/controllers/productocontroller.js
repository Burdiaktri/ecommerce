const {Producto} = require ('../models/ecommerce/productos.js')
const Response = require ('../models/server/response.js')
const {dbProducto} = require ('../models/persistence/productos.js')

const listarProductos = async (req, res,) => {
    try {
	    let response = await dbProducto.find({})
        response
            ? res.send(new Response(response))
            : res.status(404).send(new Response(response, 'producto no encontrado', 404 ))
    } catch (error){
        // next(error)
        console.log('Error en listar productos')
        console.log(error)
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
            console.log('Error en actualizar productos')
            console.log(error)
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
            console.log('Error en borrar productos')
            next(error)
        }
}

module.exports = {listarProductos, agregarProductos, actualizarProductos, borrarProductos} 