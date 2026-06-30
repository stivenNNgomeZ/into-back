const model = require('../models/tasksModel');

// GET / → 200: retorna todas las tareas
const getAll = (req, res) => {
  res.status(200).json(model.getAll());
};

// GET /:id → 200: tarea encontrada, 404: no existe
const getById = (req, res) => {
  const task = model.getById(Number(req.params.id));
  if (!task) return res.status(404).json({ error: 'Tarea no encontrada' });
  res.status(200).json(task);
};

// POST / → 201: tarea creada exitosamente
const create = (req, res) => {
  const task = model.create(req.body);
  res.status(201).json(task);
};

// PUT /:id → 200: actualizada, 404: no existe
const update = (req, res) => {
  const task = model.update(Number(req.params.id), req.body);
  if (!task) return res.status(404).json({ error: 'Tarea no encontrada' });
  res.status(200).json(task);
};

// DELETE /:id → 200: eliminada, 404: no existe
const remove = (req, res) => {
  const task = model.remove(Number(req.params.id));
  if (!task) return res.status(404).json({ error: 'Tarea no encontrada' });
  res.status(200).json(task);
};

module.exports = { getAll, getById, create, update, remove };
