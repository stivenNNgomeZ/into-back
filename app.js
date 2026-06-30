// ─── Dependencias ───
const express = require('express');         // Framework web para Node.js
const os = require('os');                   // Módulo nativo para info del sistema
const app = express();
const PORT = 4000;

// ─── Middleware global ───
app.use(express.json());                    // Convierte el body a JSON automáticamente

// ─── Rutas de la API ───
app.use('/', require('./src/routes/home'));           // GET / → info del proyecto
app.use('/users', require('./src/routes/users'));     // CRUD de usuarios
app.use('/tasks', require('./src/routes/tasks'));     // CRUD de tareas
app.use('/aprendices', require('./src/routes/aprendices'));   // CRUD de aprendices
app.use('/programas', require('./src/routes/programas'));     // CRUD de programas
app.use('/pqrs', require('./src/routes/pqrs'));       // CRUD de PQRS

// ─── Detección automática de IP local ───
const networkInterfaces = os.networkInterfaces();
let localIP = 'localhost';
for (const iface of Object.values(networkInterfaces)) {
  for (const details of iface) {
    if (details.family === 'IPv4' && !details.internal) {
      localIP = details.address;
    }
  }
}

// ─── Inicio del servidor ───
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor corriendo en:`);
  console.log(`  Local:    http://localhost:${PORT}`);
  console.log(`  Red:      http://${localIP}:${PORT}`);
});
