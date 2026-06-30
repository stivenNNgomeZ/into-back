const { Router } = require('express');
const router = Router();
const controller = require('../controllers/tasksController');

router.get('/', controller.getAll);         // GET /tasks → lista completa
router.get('/:id', controller.getById);     // GET /tasks/:id → una tarea
router.post('/', controller.create);        // POST /tasks → crear tarea
router.put('/:id', controller.update);      // PUT /tasks/:id → actualizar
router.delete('/:id', controller.remove);   // DELETE /tasks/:id → eliminar

module.exports = router;
