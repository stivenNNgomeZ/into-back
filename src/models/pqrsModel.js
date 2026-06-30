// ─── Estado en memoria con datos iniciales (simula base de datos) ───
const pqrsList = [
  { id: 1, tipo: 'Queja', descripcion: 'Problema con el servicio de internet', estado: 'pendiente' },
  { id: 2, tipo: 'Sugerencia', descripcion: 'Mejorar interfaz de usuario', estado: 'aprobada' }
];
let currentId = 3;

// Retorna todas las PQRS registradas
const getAll = () => pqrsList;

// Busca una PQRS por su ID
const getById = (id) => pqrsList.find(p => p.id === id);

// Crea una nueva PQRS con los datos recibidos
const create = (data) => {
  const newPqrs = { id: currentId++, ...data };
  pqrsList.push(newPqrs);
  return newPqrs;
};

// Actualiza una PQRS existente por ID
const update = (id, data) => {
  const index = pqrsList.findIndex(p => p.id === id);
  if (index === -1) return null;
  pqrsList[index] = { ...pqrsList[index], ...data };
  return pqrsList[index];
};

// Elimina una PQRS por ID y la retorna
const remove = (id) => {
  const index = pqrsList.findIndex(p => p.id === id);
  if (index === -1) return null;
  return pqrsList.splice(index, 1)[0];
};

module.exports = { getAll, getById, create, update, remove };
