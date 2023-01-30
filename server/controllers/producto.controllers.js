const {Producto} = require('../models/producto.models');


module.exports.crearproducto = (req, res)=>{
    const {title,price,descripcion} = req.body;
    Producto.create({
        title,
        price,
        descripcion
    })
    .then((producto)=>{
        res.json(producto)
    }).catch((error)=>{
        console.log(error)
    })
}

module.exports.listaproducto = (req, res)=>{
    Producto.find({})
    .then((producto)=>{
        res.json(producto)
    }).catch((error)=>{
        console.log(error)
    })
};

module.exports.buscarproducto = (req, res) => {
    Producto.findOne({_id: req.params.id})
        .then(producto => res.json(producto))
        .catch(err => res.json(err))
}

module.exports.editarproducto = (req, res) => {
    Producto.findOneAndUpdate({_id: req.params.id}, req.body, 
        {new:true})
        .then(updatedProduct => res.json(updatedProduct))
        .catch(err => res.json(err))
}

module.exports.eliminarproducto = (req, res) => {
    Producto.deleteOne({_id: req.params.id})
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json(err))
}