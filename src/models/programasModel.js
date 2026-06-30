// ─── Estado en memoria con datos iniciales (simula base de datos) ───
let programas = [
  { id: 1, nombre: 'ADSO', descripcion: 'Análisis y Desarrollo de Software' },
  { id: 2, nombre: 'Producción Multimedia', descripcion: 'Producción de contenidos digitales' }
];
let currentId = 3;

// Retorna todos los programas registrados
const getAll = () => programas;

// Busca un programa por su ID
const getById = (id) => programas.find(p => p.id === id);

// Crea un nuevo programa con los datos recibidos
const create = (data) => {
  const programa = { id: currentId++, ...data };
  programas.push(programa);
  return programa;
};

// Actualiza un programa existente por ID
const update = (id, data) => {
  const index = programas.findIndex(p => p.id === id);
  if (index === -1) return null;
  programas[index] = { ...programas[index], ...data };
  return programas[index];
};

// Elimina un programa por ID y lo retorna
const remove = (id) => {
  const index = programas.findIndex(p => p.id === id);
  if (index === -1) return null;
  return programas.splice(index, 1)[0];
};

module.exports = { getAll, getById, create, update, remove };
