var express = require('express')
var User = require('../models/cliente');
var routes = express.Router()


// route para retornar todos os usuarios(GET http://localhost:3000/api/users)
routes.get('/users', function(req, res) {
  User.find({}, '_id nome', function(erro, users) {
    res.json(users);
  });
});

// route para retornar todos os usuarios(GET http://localhost:3000/api/users/:id)
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

// route para cadastrar um novo usuario (POST http://localhost:3000/api/users)
routes.post('/users', (req, res) => {
  var user = new User ({
    nome: req.body.nome,
    endereco: req.body.endereco,
    email: req.body.email,
    senha: req.body.senha,
    tipoCliente: req.body.tipoCliente
  })

  if (user.tipoCliente == 'cliente'){
    user.cpf = req.body.cpf
    user.genero = req.body.genero
    user.dataNascimento = req.body.dataNascimento
  }else if(user.tipoCliente == 'empresa'){
    user.cnpj = req.body.cnpj
    user.dataFundacao = req.body.dataFundacao
  }else{
    res.json({
      success: false,
      message: "Falha ao cadastrar usuário. Tipo de usuário incorreto."
    })
  }

  user.save().then(
     () => {
       res.json({
         success: true,
         result: user
       })
     },
     erro => {
       res.json({
         success: false,
         details: erro,
         result: user
       })
     })
})

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
