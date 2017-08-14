var mongoose = require('mongoose'),
		Schema = mongoose.Schema,
		ObjectId = Schema.ObjectId;

var reuniao = new Schema ({
	tipoServico: {type: String},
  date: {type: Date},
	sala: {type: String},
  custo: {type: Number}
})

module.exports = mongoose.model('Reuniao', reuniao);
