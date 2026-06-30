const { Router } = require('express');
const router = Router();
const controller = require('../controllers/usersController');

router.get('/', controller.getAll);         // GET /users → lista completa
router.get('/:id', controller.getById);     // GET /users/:id → un usuario
router.post('/', controller.create);        // POST /users → crear usuario
router.put('/:id', controller.update);      // PUT /users/:id → actualizar
router.delete('/:id', controller.remove);   // DELETE /users/:id → eliminar

module.exports = router;
