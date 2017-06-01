var mongoose = require('mongoose'),
		Schema = mongoose.Schema,
		ObjectId = Schema.ObjectId;

var servico = new Schema ({
  type: object,
  properties: {
    custo {type: Number},
    date {type: Date},
    descricao {type: String}
  }
})

module.exports = mongoose.model('Servico', Servico);
