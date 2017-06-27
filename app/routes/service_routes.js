var express = require('express')
var Service = require('../models/cliente');
var routes = express.Router()


// route para retornar todos os serviços(GET http://localhost:3000/api/services)
routes.get('/services', function(req, res) {
  Service.find({}, function(erro, users) {
    res.json(services);
  });
});

// route para retornar um serviço através do seu id(GET http://localhost:3000/api/services/:id)
routes.get('/services/:id', (req, res) => {
  User.findById(req.params.id).exec().then(
    service => {
      if (service) {
        responder(res, true, "", service)
      } else {
        responder(res, false, "Serviço indisponível.", undefined)
      }
    }, erro => {
        responder(res, false, "Serviço indisponível.", undefined)
    }) // then
})

// route para utilizar um novo serviço (POST http://localhost:3000/api/services)
routes.post('/service', (req, res) => {
  var service = new Service ({
    tipoServico: req.body.tipoServico,
    codServico: req.body.codServico,
    date: req.body.date,
    custo: req.body.custo
  })

  if (service.tipoServico == 'reserva'){
    service.plano = req.body.plano
  }else if(user.tipoServico == 'impressora'){
    user.quantPag = req.body.quantPag
  }else{
    res.json({
      success: false,
      message: "Erro na solicitação do serviço (o tipo de serviço apresentado não existe)."
    })
  }

  service.save().then(
     () => {
       res.json({
         success: true,
         result: service
       })s
     },
     erro => {
       res.json({
         success: false,
         details: erro,
         result: service
       })
     })
})

// route para remover um serviço (DEL http://localhost:3000/api/services/:id)
routes.delete('/services/:id', (req, res) => {
  Service.findByIdAndRemove(req.params.id).exec().then(
    service => {
      if (service) {
        responder(res, true, "", service)
      } else {
        responder(res, false, "Serviço indisponível.", undefined)
      }
    }, erro => {
        responder(res, false, "Serviço indisponível.", undefined)
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
