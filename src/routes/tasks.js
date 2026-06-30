const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json([
    { id: 1, titulo: 'Hacer informe', completada: false },
    { id: 2, titulo: 'Estudiar Express', completada: true }
  ]);
});

router.post('/', (req, res) => {
  res.json({ mensaje: 'Tarea creada', tarea: req.body });
});

module.exports = router;
