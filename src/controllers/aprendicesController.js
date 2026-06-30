const model = require('../models/aprendicesModel');

// GET / → 200: retorna todos los aprendices
const getAll = (req, res) => {
  res.status(200).json(model.getAll());
};

// GET /:id → 200: aprendiz encontrado, 404: no existe
const getById = (req, res) => {
  const aprendiz = model.getById(Number(req.params.id));
  if (!aprendiz) return res.status(404).json({ error: 'Aprendiz no encontrado' });
  res.status(200).json(aprendiz);
};

// POST / → 201: aprendiz creado exitosamente
const create = (req, res) => {
  const aprendiz = model.create(req.body);
  res.status(201).json(aprendiz);
};

// PUT /:id → 200: actualizado, 404: no existe
const update = (req, res) => {
  const aprendiz = model.update(Number(req.params.id), req.body);
  if (!aprendiz) return res.status(404).json({ error: 'Aprendiz no encontrado' });
  res.status(200).json(aprendiz);
};

// DELETE /:id → 200: eliminado, 404: no existe
const remove = (req, res) => {
  const aprendiz = model.remove(Number(req.params.id));
  if (!aprendiz) return res.status(404).json({ error: 'Aprendiz no encontrado' });
  res.status(200).json(aprendiz);
};

module.exports = { getAll, getById, create, update, remove };
