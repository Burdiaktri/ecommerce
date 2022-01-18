const { Router } = require ("express")
const { listarProductos, agregarProductos, actualizarProductos, borrarProductos} = require ("../controllers/productocontroller.js")
const productoRouter = Router()

productoRouter
	.get("/", listarProductos)
	.post("/", agregarProductos)
	.put("/:id", actualizarProductos)
	.delete("/:id", borrarProductos)


module.exports = productoRouter