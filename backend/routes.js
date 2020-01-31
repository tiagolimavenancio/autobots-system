const express = require('express');
const routes = express.Router();

const PartController = require('./controllers/PartController')

routes.get('/', PartController.index);
routes.post('/create-part', PartController.store);
routes.get('/show-part/:id', PartController.show);
routes.put('/edit-part/:id', PartController.update);
routes.delete('/delete-part/:id', PartController.delete);

module.exports = routes;