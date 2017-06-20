var express = require('express'),
    app = express(),
    passport = require('passport'),
    User = require('../models/cliente'),
    config = require('config'),
    jwt = require('jsonwebtoken'),
    routes = express.Router()


    // route de autenticação de usuarios (POST http://localhost:8080/api/authenticate)
    routes.post('/authenticate', function(req, res) {

      User.findOne({
        nome: req.body.nome
      }, function(err, user) {
            if (err) throw err;
        if (!user) {

          res.json({ success: false, message: 'Falha na autenticação. Usuário não encontrado.' });
        } else if (user) {
          // check if password matches
          if (user.password != req.body.password) {
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

    // route para mostrar uma mensagem inicial (GET http://localhost:8080/api/)
    routes.get('/', function(req, res) {
      res.json({ message: 'Bem vindo ao Coworking :D !' });
    });

module.exports = routes;
