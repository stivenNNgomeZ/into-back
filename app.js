const express = require('express');
const os = require('os');
const app = express();
const PORT = 4000;

const usersRouter = require('./src/routes/users');
const tasksRouter = require('./src/routes/tasks');

app.use(express.json());
app.use('/users', usersRouter);
app.use('/tasks', tasksRouter);

app.get('/', (req, res) => {
  res.json({
    proyecto: 'Sistema de Gestión Académica',
    version: '1.0.0',
    rutas: ['/aprendices', '/programas', '/users', '/tasks']
  });
});

app.get('/aprendices', (req, res) => {
  res.json([
    { id: 1, nombre: 'Carlos', programa: 'ADSO' },
    { id: 2, nombre: 'María', programa: 'ADSO' }
  ]);
});

app.get('/programas', (req, res) => {
  res.json([
    { id: 1, nombre: 'ADSO', descripcion: 'Análisis y Desarrollo de Software' },
    { id: 2, nombre: 'Producción Multimedia', descripcion: 'Producción de contenidos digitales' }
  ]);
});

const networkInterfaces = os.networkInterfaces();
let localIP = 'localhost';
for (const iface of Object.values(networkInterfaces)) {
  for (const details of iface) {
    if (details.family === 'IPv4' && !details.internal) {
      localIP = details.address;
    }
  }
}

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor corriendo en:`);
  console.log(`  Local:    http://localhost:${PORT}`);
  console.log(`  Red:      http://${localIP}:${PORT}`);
});
