var mongoose = require('mongoose'),
		Schema = mongoose.Schema,
		ObjectId = Schema.ObjectId;

var impressao = new Schema ({
	  tipoServico {type: String},
    date {type: Date},
    custo {type: Number},
    quantPag {type: Number},
		quantCop{type: Number},
		horario{type: Number},
		typePapel{type: String},
		alturaPapel{type: Number},
		larguraPapel{type: Number}
})

module.exports = mongoose.model('Impressao', impressao);
