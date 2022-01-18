const {v4} = require ('uuid')
class Carrito {
    constructor(id, userId, productId){
        this.id= v4(),
        this.userId = userId
        this.timestamp = Date.now(),
        this.productos = [productId],
        this.status = true

    }
}

module.exports = {Carrito}