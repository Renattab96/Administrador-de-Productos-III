const controllerProducto = require('../controllers/producto.controllers');

module.exports = (app) => {
  app.post('/api/crear/producto',controllerProducto.crearproducto);
  app.get('/api/productos',controllerProducto.listaproducto);
  app.put('/api/producto/edicion/:id',controllerProducto.editarproducto);
  app.get('/api/producto/filtrar/:id',controllerProducto.buscarproducto);
  app.delete('/api/producto/borrar/:id', controllerProducto.eliminarproducto);
  
}