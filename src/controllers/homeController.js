const model = require('../models/homeModel');

// GET / → 200: retorna la información del proyecto
const getInfo = (req, res) => {
  res.status(200).json(model.getInfo());
};

module.exports = { getInfo };
