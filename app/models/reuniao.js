var mongoose = require('mongoose'),
		Schema = mongoose.Schema,
		ObjectId = Schema.ObjectId;

var reuniao = new Schema ({
	tipoServico {type: String},
  codServico {type: Number},
  date {type: Date},
  custo {type: Number}
})

module.exports = mongoose.model('Reuniao', reuniao);
