const mongoose = require ('mongoose');

const ProductoSchema = mongoose.Schema({
    title:{
        type:String,
        required: [true, "TitUlo es requrido"],
        minlength: [3, "Debe llevar mas de 3 caracteres"]

    },
    price:{
        type:Number,
        required: [true, "Precio es requerido"],
        min: [0, "Precio mayor a O"]
    },
    descripcion:{
        type:String,
        required: [true, "Description es obligatorio"],
        minlength: [3, "Debe llevar mas de 3 caracteres"]
        
    }
},{timestamps:true});


module.exports.Producto = mongoose.model('Producto',ProductoSchema);