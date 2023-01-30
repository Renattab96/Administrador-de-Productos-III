//Configuracion
const cors = require('cors')
const express = require ('express')
const app = express()
const PORT = 8000


// llamar a mongoose.config.js
    require('./config/mongose.config')

//middleware para POST
 
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// CORS 
    app.use(cors({
    origin:'http://localhost:3000',
    credentials:true
    }))


// IMPORTAR LAS RUTAS DE NUESTRO SERVIDOR BACK-END
    // const Rutas = require('./routes/producto.routes')
    // Rutas(app)
    const rutasproducto = require('./routes/producto.routes')
    rutasproducto(app)

    app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}`)
    })
