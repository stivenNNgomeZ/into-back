const { Router } = require('express');
const router = Router();
const controller = require('../controllers/programasController');

router.get('/', controller.getAll);         // GET /programas → lista completa
router.get('/:id', controller.getById);     // GET /programas/:id → un programa
router.post('/', controller.create);        // POST /programas → crear programa
router.put('/:id', controller.update);      // PUT /programas/:id → actualizar
router.delete('/:id', controller.remove);   // DELETE /programas/:id → eliminar

module.exports = router;
