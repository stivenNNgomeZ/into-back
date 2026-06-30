const model = require('../models/programasModel');

// GET / → 200: retorna todos los programas
const getAll = (req, res) => {
  res.status(200).json(model.getAll());
};

// GET /:id → 200: programa encontrado, 404: no existe
const getById = (req, res) => {
  const programa = model.getById(Number(req.params.id));
  if (!programa) return res.status(404).json({ error: 'Programa no encontrado' });
  res.status(200).json(programa);
};

// POST / → 201: programa creado exitosamente
const create = (req, res) => {
  const programa = model.create(req.body);
  res.status(201).json(programa);
};

// PUT /:id → 200: actualizado, 404: no existe
const update = (req, res) => {
  const programa = model.update(Number(req.params.id), req.body);
  if (!programa) return res.status(404).json({ error: 'Programa no encontrado' });
  res.status(200).json(programa);
};

// DELETE /:id → 200: eliminado, 404: no existe
const remove = (req, res) => {
  const programa = model.remove(Number(req.params.id));
  if (!programa) return res.status(404).json({ error: 'Programa no encontrado' });
  res.status(200).json(programa);
};

module.exports = { getAll, getById, create, update, remove };
