var express = require('express'),
    app = express(),
    passport = require('passport'),
    User = require('../models/cliente'),
    config = require('config'),
    jwt = require('jsonwebtoken'),
    routes = express.Router()


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

    // route de autenticação de usuarios (POST http://localhost:3000/api/authenticate)
    routes.post('/authenticate', function(req, res) {

      User.findOne({
        email: req.body.email
      }, function(err, user) {
            if (err) throw err;
        if (!user) {

          res.json({ success: false, message: 'Falha na autenticação. Usuário não encontrado.' });
        } else if (user) {
          // check if password matches
          if (user.senha != req.body.senha) {
            res.json({ success: false, message: 'Falha na autenticação. Senha incorreta.' });
          } else {
            // if user is found and password is right
            // create a token
            var token = jwt.sign(user._id, config.secret, {
              expiresIn: '1d' // expires in 24 hours
            });
            // return the information including token as JSON
            res.json({
              success: true,
              message: 'Aproveite seu token!',
              token: token
            });
          }
        }
      });
    });

    // route middleware para verificar o token
    routes.use(function(req, res, next) {
      // obtendo o token
      var token = req.body.token || req.query.token || req.headers['x-access-token'];

      // decode token
      if (token) {
        // verificando secret
        jwt.verify(token, config.secret, function(err, decoded) {
          if (err) {
            return res.json({ success: false, message: 'Falha ao autenticar o token.' });
          } else {
            // se tudo ocorrer certo, salva a requisição para usar em outras rotas
            req.decoded = decoded;
            next();
          }
        });

      } else {
        // se não retornar um token
        return res.status(403).send({
            success: false,
            message: 'Token não fornecido.'
        });

      }
    });

    // route para mostrar uma mensagem inicial (GET http://localhost:3000/api/)
    routes.get('/', function(req, res) {
      res.json({ message: 'Bem vindo ao Coworking :D !' });
    });

module.exports = routes;
