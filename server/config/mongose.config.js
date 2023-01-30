const mongoose = require ('mongoose')

mongoose.set('strictQuery', true)

mongoose.connect("mongodb://127.0.0.1:27017/producto",{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>
    console.log(`Conexion Establecida Correcta`))
.catch(err=>
    console.log('Tenemos une error verifica Nuevamente ', err))

