const { Router } = require('express');      // Módulo de enrutamiento de Express
const router = Router();
const controller = require('../controllers/homeController');

router.get('/', controller.getInfo);        // GET / → información del proyecto

module.exports = router;
