// ─── Estado en memoria con datos iniciales (simula base de datos) ───
let users = [
  { id: 1, nombre: 'Stiven', email: 'stiven@email.com', rol: 'admin' },
  { id: 2, nombre: 'Laura', email: 'laura@email.com', rol: 'usuario' },
  { id: 3, nombre: 'Josue', email: 'josue@email.com', rol: 'usuario' }
];
let currentId = 4;

// Retorna todos los usuarios registrados
const getAll = () => users;

// Busca un usuario por su ID
const getById = (id) => users.find(u => u.id === id);

// Crea un nuevo usuario con los datos recibidos
const create = (data) => {
  const user = { id: currentId++, ...data };
  users.push(user);
  return user;
};

// Actualiza un usuario existente por ID
const update = (id, data) => {
  const index = users.findIndex(u => u.id === id);
  if (index === -1) return null;
  users[index] = { ...users[index], ...data };
  return users[index];
};

// Elimina un usuario por ID y lo retorna
const remove = (id) => {
  const index = users.findIndex(u => u.id === id);
  if (index === -1) return null;
  return users.splice(index, 1)[0];
};

module.exports = { getAll, getById, create, update, remove };
