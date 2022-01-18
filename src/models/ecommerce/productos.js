const {v4} = require ('uuid')
class Producto {
    constructor(id, nombre, timestamp,  descripcion, codigo, url, precio, stock){
        this.id = v4(),
        this.nombre = nombre,
        this.timestamp = Date.now(),
        this.descripcion = descripcion,
        this.codigo = codigo,
        this.url = url,
        this.precio = precio,
        this.stock = stock

    }
}

module.exports = {Producto} 