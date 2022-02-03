const config = require('../../config/mongoDb')
const myMongoClient = require('./mongoDbClient')

//Acá importaría otras clases en caso de usar varias bases de datos
function dbConnection(id) {
    this.instance =
        id == 1 
        new myMongoClient(config.atlasUrl, config.options)
    }

module.exports = dbConnection