const mongoose = require('mongoose') 

mongoose.connect(process.env.MONGO_DB)
.then((db) => console.log('Database connected'))
.catch(err => console.log(err))

