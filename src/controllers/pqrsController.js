const model = require('../models/pqrsModel');

// GET / → 200: retorna todas las PQRS
const getAll = (req, res) => {
  res.status(200).json(model.getAll());
};

// GET /:id → 200: PQRS encontrada, 404: no existe
const getById = (req, res) => {
  const pqrs = model.getById(Number(req.params.id));
  if (!pqrs) return res.status(404).json({ error: 'PQRS no encontrada' });
  res.status(200).json(pqrs);
};

// POST / → 201: PQRS creada exitosamente
const create = (req, res) => {
  const pqrs = model.create(req.body);
  res.status(201).json(pqrs);
};

// PUT /:id → 200: actualizada, 404: no existe
const update = (req, res) => {
  const pqrs = model.update(Number(req.params.id), req.body);
  if (!pqrs) return res.status(404).json({ error: 'PQRS no encontrada' });
  res.status(200).json(pqrs);
};

// DELETE /:id → 200: eliminada, 404: no existe
const remove = (req, res) => {
  const pqrs = model.remove(Number(req.params.id));
  if (!pqrs) return res.status(404).json({ error: 'PQRS no encontrada' });
  res.status(200).json(pqrs);
};

module.exports = { getAll, getById, create, update, remove };
