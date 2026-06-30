// ─── Estado en memoria con datos iniciales (simula base de datos) ───
let tasks = [
  { id: 1, titulo: 'Hacer informe', completada: false, usuarioId: 1 },
  { id: 2, titulo: 'Estudiar Express', completada: true, usuarioId: 2 },
  { id: 3, titulo: 'Diseñar API', completada: false, usuarioId: 3 }
];
let currentId = 4;

// Retorna todas las tareas registradas
const getAll = () => tasks;

// Busca una tarea por su ID
const getById = (id) => tasks.find(t => t.id === id);

// Crea una nueva tarea con los datos recibidos
const create = (data) => {
  const task = { id: currentId++, ...data };
  tasks.push(task);
  return task;
};

// Actualiza una tarea existente por ID
const update = (id, data) => {
  const index = tasks.findIndex(t => t.id === id);
  if (index === -1) return null;
  tasks[index] = { ...tasks[index], ...data };
  return tasks[index];
};

// Elimina una tarea por ID y la retorna
const remove = (id) => {
  const index = tasks.findIndex(t => t.id === id);
  if (index === -1) return null;
  return tasks.splice(index, 1)[0];
};

module.exports = { getAll, getById, create, update, remove };
