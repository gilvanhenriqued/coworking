var express = require('express')
var routes = express.Router()


// route para retornar todos os usuarios(GET http://localhost:8080/api/users)
routes.get('/users', function(req, res) {
  User.find({}, function(err, users) {
    res.json(users);
  });
});

// route para retornar todos os usuarios(GET http://localhost:8080/api/users/:id)
routes.get('/users/:id', (req, res) => {
  User.findById(req.params.id).exec().then(
      user => {
        if (user) {
          res.json({
            success: true,
            result: user
          })
        } else {
          res.json({
            success: false,
            result: err
          })
        }
      })
  })

// route para cadastrar um novo usuario (POST http://localhost:8080/api/users)
routes.post ('users', (req, res) => {
  var user = new User ({
    codUser: req.body.codUser
    nome: req.body.nome
    endereco: req.body.endereco
    email: req.body.email
    senha: req.body.senha
    tipoCliente: req.body.tipoCliente
  })

  if (tipoCliente == 'cliente'){
    user.cpf = cpf;
    user.genero = genero;
    user.dataNascimento = dataNascimento;
  }else if(tipoCliente == 'empresa'){
    user.cnpj = cnpj
    user.dataFundacao = dataFundacao;
  }else{
    res.json({
      success: fase,
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
     error => {
       res.json({
         success: false,
         details: error,
         result: user
       })
     })
})


// route para remover um usuario (DEL http://localhost:8080/api/users/:id)
routes.delete('/users/:id', (req, res) => {
  Product.findByIdAndRemove(req.params.id).exec().then(
      user => {
        if (user) {
          res.json({
            success: true,
            result: user
          })
        } else {
          res.json({
            success: false,
            result: err
          })
        }
      }
})


module.exports = routes;
