const { Router } = require('express');
const router = Router();
const controller = require('../controllers/aprendicesController');

router.get('/', controller.getAll);         // GET /aprendices → lista completa
router.get('/:id', controller.getById);     // GET /aprendices/:id → un aprendiz
router.post('/', controller.create);        // POST /aprendices → crear aprendiz
router.put('/:id', controller.update);      // PUT /aprendices/:id → actualizar
router.delete('/:id', controller.remove);   // DELETE /aprendices/:id → eliminar

module.exports = router;
