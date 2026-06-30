const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json([
    { id: 1, nombre: 'Stiven', email: 'stiven@email.com' },
    { id: 2, nombre: 'Laura', email: 'laura@email.com' }
  ]);
});

router.post('/', (req, res) => {
  res.json({ mensaje: 'Usuario creado', usuario: req.body });
});

module.exports = router;
