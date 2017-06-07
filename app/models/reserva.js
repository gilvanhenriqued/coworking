var mongoose = require('mongoose'),
		Schema = mongoose.Schema,
		ObjectId = Schema.ObjectId;

var reserva = new Schema({
  type: objetc,
  properties: {
    codServico {type: Number},
    date {type: Date},
    custo {type: Number},
    plano {type: String}
    }
  })

module.exports = mongoose.model('Reserva', reserva);
