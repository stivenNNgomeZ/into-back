// Retorna la información general del proyecto
const getInfo = () => ({
  proyecto: 'Sistema de Gestión Académica',
  version: '1.0.0',
  rutasDisponibles: ['/aprendices', '/programas', '/users', '/tasks', '/pqrs']
});

module.exports = { getInfo };
