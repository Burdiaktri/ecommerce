const mongoose = require('mongoose') 

mongoose.connect('mongodb+srv://burdiaktri:haru30699@cluster0.nbi1d.mongodb.net/ecommerce?retryWrites=true&w=majority')
.then(db => console.log('Database connected'))
.catch(err => console.log(err))
