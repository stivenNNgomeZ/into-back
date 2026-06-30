const model = require('../models/usersModel');

// GET / → 200: retorna todos los usuarios
const getAll = (req, res) => {
  res.status(200).json(model.getAll());
};

// GET /:id → 200: usuario encontrado, 404: no existe
const getById = (req, res) => {
  const user = model.getById(Number(req.params.id));
  if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });
  res.status(200).json(user);
};

// POST / → 201: usuario creado exitosamente
const create = (req, res) => {
  const user = model.create(req.body);
  res.status(201).json(user);
};

// PUT /:id → 200: actualizado, 404: no existe
const update = (req, res) => {
  const user = model.update(Number(req.params.id), req.body);
  if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });
  res.status(200).json(user);
};

// DELETE /:id → 200: eliminado, 404: no existe
const remove = (req, res) => {
  const user = model.remove(Number(req.params.id));
  if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });
  res.status(200).json(user);
};

module.exports = { getAll, getById, create, update, remove };
