var mongoose = require('mongoose'),
		Schema = mongoose.Schema,
		ObjectId = Schema.ObjectId;

var reuniao = new Schema ({
  codServico {type: Number},
  date {type: Date},
  custo {type: Number}
})

module.exports = mongoose.model('Reuniao', reuniao);
