const { Router } = require('express');
const router = Router();
const controller = require('../controllers/pqrsController');

router.get('/', controller.getAll);         // GET /pqrs → lista completa
router.get('/:id', controller.getById);     // GET /pqrs/:id → una PQRS
router.post('/', controller.create);        // POST /pqrs → crear PQRS
router.put('/:id', controller.update);      // PUT /pqrs/:id → actualizar
router.delete('/:id', controller.remove);   // DELETE /pqrs/:id → eliminar

module.exports = router;
