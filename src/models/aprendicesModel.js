// ─── Estado en memoria con datos iniciales (simula base de datos) ───
let aprendices = [
  { id: 1, nombre: 'Carlos', programa: 'ADSO' },
  { id: 2, nombre: 'María', programa: 'ADSO' },
  { id: 3, nombre: 'Pedro', programa: 'Producción Multimedia' }
];
let currentId = 4;

// Retorna todos los aprendices registrados
const getAll = () => aprendices;

// Busca un aprendiz por su ID
const getById = (id) => aprendices.find(a => a.id === id);

// Crea un nuevo aprendiz con los datos recibidos
const create = (data) => {
  const aprendiz = { id: currentId++, ...data };
  aprendices.push(aprendiz);
  return aprendiz;
};

// Actualiza un aprendiz existente por ID
const update = (id, data) => {
  const index = aprendices.findIndex(a => a.id === id);
  if (index === -1) return null;
  aprendices[index] = { ...aprendices[index], ...data };
  return aprendices[index];
};

// Elimina un aprendiz por ID y lo retorna
const remove = (id) => {
  const index = aprendices.findIndex(a => a.id === id);
  if (index === -1) return null;
  return aprendices.splice(index, 1)[0];
};

module.exports = { getAll, getById, create, update, remove };
