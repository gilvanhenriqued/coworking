var express = require('express')
var User = require('../models/cliente');
var routes = express.Router()


// route para retornar todos os usuarios(GET http://localhost:3000/api/users)
routes.get('/users', function(req, res) {
  User.find({}, '_id nome', function(erro, users) {
    res.json(users);
  });
});

// route para retornar um usuário por ID (GET http://localhost:3000/api/users/:id)
routes.get('/users/:id', (req, res) => {
  User.findById(req.params.id).select('_id nome email endereco tipoCliente').exec().then(
    user => {
      if (user) {
        responder(res, true, "", user)
      } else {
        responder(res, false, "Usuário não encontrado.", undefined)
      }
    }, erro => {
        responder(res, false, "Usuário não encontrado.", undefined)
    }) // then
})

// A ROTA DE CADASTRAR USUÁRIOS FICA NO authentication_routes PARA NÃO PRECISAR
// DA VERIFICAÇÃO DO TOKEN.

// route para remover um usuario (DEL http://localhost:3000/api/users/:id)
routes.delete('/users/:id', (req, res) => {
  User.findByIdAndRemove(req.params.id).select('_id nome').exec().then(
    user => {
      if (user) {
        responder(res, true, "", user)
      } else {
        responder(res, false, "Usuário não encontrado.", undefined)
      }
    }, erro => {
        responder(res, false, "Usuário não encontrado.", undefined)
    }) // then
})

// metodo para responder os erros e sucessos
// valores padrão passados por parametro
function responder(res, success=true, message="", result){
  res.json({
    success: success,
    result: result,
    message: message
  })
}

module.exports = routes;
