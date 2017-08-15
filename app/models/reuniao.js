var mongoose = require('mongoose'),
		Schema = mongoose.Schema,
		ObjectId = Schema.ObjectId;

var reuniao = new Schema ({
	tipoServico: {type: String},
	horario: {type: Number},
  date: {type: Date},
  plano: {type: String}
})

module.exports = mongoose.model('Reuniao', reuniao);
