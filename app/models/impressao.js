var mongoose = require('mongoose'),
		Schema = mongoose.Schema,
		ObjectId = Schema.ObjectId;

var impressao = new Schema ({
	  tipoServico {type: String},
    date {type: Date},
    custo {type: Number},
    quantPag {type: Number, min: 1}
})

module.exports = mongoose.model('Impressao', impressao);
