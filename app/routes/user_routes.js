var express = require('express')
var routes = express.Router()

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
      },
})

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

routes.post ('users', (req, res) => {
  var user = new User ({
    codUser: req.body.codUser
    name: req.body.name
    endereco: req.body.endereco
    email: req.body.email
    senha: req.body.senha
    tipoCliente: req.body.tipoCliente
  })

  if (tipoCliente == 'cliente'){
    user.cpf = cpf;
    user.genero = genero;
    user.dataNascimento = dataNascimento;
  }

  if (tipoCliente == 'empresa'){
    user.cnpj = cnpj
    user.dataFundacao = dataFundacao;
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


module.exports = routes;
