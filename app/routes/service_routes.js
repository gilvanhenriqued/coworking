var express = require('express')
var Reserva = require('../models/reserva');
var Boleto = require('../models/boleto');
var routes = express.Router()


// route para retornar todos os serviços(GET http://localhost:3000/api/services)
routes.get('/services', function(req, res) {
  Service.find({}, function(erro, services) {
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
routes.post('/services', (req, res) => {
    console.log(req.body.tipoServico)
  if (req.body.tipoServico == 'reserva'){
    console.log(req.body.tipoServico)
    var reserva = new Reserva ({
      tipoServico: req.body.tipoServico,
      date: req.body.date,
      custo: req.body.custo,
      plano: req.body.plano,
      tipoReserva: req.body.tipoReserva
    })

    reserva.save().then(
       () => {
         res.json({
           success: true,
           result: reserva
         })
       },
       erro => {
         res.json({
           success: false,
           details: erro,
           result: reserva
         })
       })

  }else if(req.body.tipoServico == 'impressora'){
    var boleto = new Botelo ({
      tipoServico: req.body.tipoServico,
      date: req.body.date,
      custo: req.body.custo,
      quantPag: req.body.quantPag
    })

        boleto.save().then(
           () => {
             res.json({
               success: true,
               result: boleto
             })
           },
           erro => {
             res.json({
               success: false,
               details: erro,
               result: boleto
             })
           })

  }else{
    res.json({
      success: false,
      message: "Erro na solicitação do serviço (o tipo de serviço apresentado não existe)."
    })
  }

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
