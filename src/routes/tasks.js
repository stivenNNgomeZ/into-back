const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Lista de tareas: aquí se mostrarán todas las tareas pendientes y completadas');
});

router.post('/', (req, res) => {
  res.send('Crear tarea: aquí se registrará una nueva tarea');
});

module.exports = router;
