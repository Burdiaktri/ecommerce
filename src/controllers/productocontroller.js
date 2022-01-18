const {Producto} = require ('../models/ecommerce/productos.js')
const Response = require ('../models/server/response.js')
const dbProducto = require ('../models/persistence/productos.js')

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
    try {
        const properties = [
            'id',
            'timestamp',
            'nombre',
            'descripcion',
            'codigo',
            'url',
            'precio',
            'stock',
        ];
        let items = {};
        for (const key in req.body) {
            if (properties.includes(key)) {
                items[key] = req.body[key];
            }
        }

    let response = await dbProducto.updateOne({ id, items} )
    response 
        ? res.send(new Response(response))
        : res.status(404).send(new Response(response, 'Producto no encontrado', 404))
    
        }catch (error){
            console.log('Error en actualizar productos')
            console.log(error)
            next(error)
        } 
}

const borrarProductos = async (req, res, next) => {
        const { id } = req.params
        try{
            const producto = await dbProducto.destroy({
                where: {
                    id
                }
            })
            producto
                ? res.send(new Response(producto))
                : res.status(404).send(new Response('producto no encontrado', 404))
            
        } catch(error){
            console.log('Error en borrar productos')
            next(error)
        }
}

module.exports = {listarProductos, agregarProductos, actualizarProductos, borrarProductos} 