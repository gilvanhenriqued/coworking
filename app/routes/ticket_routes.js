var express = require('express')
var Ticket = require('../models/boleto')
var routes = express.Router()


// route para retornar todos os boletos(GET http://localhost:3000/api/tickets)
routes.get('/tickets', function(req, res) {
  Ticket.find({}, function(erro, tickets) {
    res.json(tickets);
  });
});

// route para retornar um boleto através do seu id(GET http://localhost:3000/api/tickets/:id)
routes.get('/tickets/:id', (req, res) => {
  Ticket.findById(req.params.id).exec().then(
    ticket => {
      if (ticket) {
        responder(res, true, "", ticket)
      } else {
        responder(res, false, "Boleto não encontrado.", undefined)
      }
    }, erro => {
        responder(res, false, "Boleto não encontrado.", undefined)
    }) // then
})

// route para exigir um novo boleto (POST http://localhost:3000/api/tickets)
routes.post('/ticket', (req, res) => {
  var ticket = new Ticket ({
    codBoleto: req.body.codServico,
    date: req.body.date,
    custo: req.body.custo,
    codBarra: req.body.codBarra
  })

  boleto.save().then(
     () => {
       res.json({
         success: true,
         result: ticket
       })
     },
     erro => {
       res.json({
         success: false,
         details: erro,
         result: ticket
       })
     })
})

// route para remover um boleto (DEL http://localhost:3000/api/tickets/:id)
routes.delete('/tickets/:id', (req, res) => {
  Ticket.findByIdAndRemove(req.params.id).exec().then(
    ticket => {
      if (ticket) {
        responder(res, true, "", ticket)
      } else {
        responder(res, false, "Boleto inexistente.", undefined)
      }
    }, erro => {
        responder(res, false, "Boleto inexistente.", undefined)
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
