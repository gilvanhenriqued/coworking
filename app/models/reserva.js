var mongoose = require('mongoose'),
		Schema = mongoose.Schema,
		ObjectId = Schema.ObjectId;

var reserva = new Schema({
		tipoServico: {type: String},
		horario: {type: Number},
    date: {type: Date},
    plano: {type: String},
		tipoReserva: {type: String}
  })

module.exports = mongoose.model('Reserva', reserva);
