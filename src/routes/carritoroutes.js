const {Router} = require ("express")
const {listarCarrito, listarProductosCarrito, crearCarrito} = require ('../controllers/carritocontroller.js')

const carritoRouter = Router()

carritoRouter
	.get("/", listarCarrito)
	.get("/productos", listarProductosCarrito)
	.post("/carrito", crearCarrito)


module.exports = carritoRouter