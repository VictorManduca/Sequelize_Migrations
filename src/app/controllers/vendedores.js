const model = require("../models");

function store(req, res) {
  const body = {
    ...req.body
  };

  return model
    .Vendedor
    .create({
      Nome: body.nome,
      Senha: body.senha,
    })
    .then(response => res.status(201).send())
    .catch(error => res.status(400).json(error));
}

function index(req, res) {
  return model
    .Vendedor
    .findAll()
    .then(sellers => {
      const seller = sellers.map(item => item);
      res.status(200).json(seller);
    })
    .catch(error => res.status(400).json(error));
}

function show(req, res) {
  const {
    id
  } = req.params;

  return model
    .Vendedor
    .findOne({
      where: {
        ID: id
      }
    })
    .then(seller => res.status(200).json(seller))
    .catch(error => res.status(400).json(error));
}

function update(req, res) {
  const {
    id
  } = req.params;

  const body = {
    ...req.body
  };

  return model
    .Vendedor
    .update({
      Nome: body.nome,
      Senha: body.senha,
    }, {
      where: {
        ID: id
      }
    })
    .then(response => res.status(200).send())
    .catch(error => res.status(400).json(error));
}

function destroy(req, res) {
  const {
    id
  } = req.params;

  return model
    .Vendedor
    .destroy({
      where: {
        ID: id
      }
    })
    .then(response => res.status(200).send())
    .catch(error => res.status(400).json(error));
}

module.exports = {
  store,
  index,
  show,
  update,
  destroy,
};