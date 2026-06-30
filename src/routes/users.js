const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Lista de usuarios: aquí se mostrarán todos los usuarios registrados');
});

router.post('/', (req, res) => {
  res.send('Crear usuario: aquí se registrará un nuevo usuario');
});

module.exports = router;
