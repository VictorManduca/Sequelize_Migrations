const {
  Router
} = require("express");
const routes = Router();

const migrationsController = require('./app/controllers/vendedores');

routes.post('/migrations', migrationsController.store);
routes.get('/migrations', migrationsController.index);
routes.get('/migrations/:id', migrationsController.show);
routes.put('/migrations/:id', migrationsController.update);
routes.delete('/migrations/:id', migrationsController.destroy);

module.exports = routes;