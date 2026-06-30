const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Bienvenido al Sistema de Gestión Académica');
});

app.get('/aprendices', (req, res) => {
  res.send('Gestión de Aprendices: aquí se administrará la información de los aprendices');
});

app.get('/programas', (req, res) => {
  res.send('Gestión de Programas: aquí se administrarán los programas de formación');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
