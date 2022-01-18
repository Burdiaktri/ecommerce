const os = require ('os')
const cluster = require ('cluster')
const numCPUs = os.cpus().length
const app = require('./src/server.js')
const MODO = process.argv[3]
const PORT = process.env.PORT || 8080


const server = app.listen(PORT, () =>{
    console.log(`Servidor inicializado en puerto ${server.address().port}`)
})


server.on('error', error => console.log(`Error en servidor ${error}`))

// if (MODO == "CLUSTER"){
//     if (cluster.isPrimary){
//         console.log(`Master PID ${process.pid} is running`)
//         for (let i=0; i<2; i++){
//             cluster.fork()
//         }
//         cluster.on('exit', (worker, code, signal) => console.log(`Worker ${worker.process.pid} died`))
//     } else {
//         const server = app.listen(PORT, () =>{
//                 console.log(`Servidor inicializado en puerto ${server.address().port}`)
//             })
//             server.on('error', error => console.log(`Error en servidor ${error}`))
       
//     }  
// }
  
