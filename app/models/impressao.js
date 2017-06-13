var mongoose = require('mongoose'),
		Schema = mongoose.Schema,
		ObjectId = Schema.ObjectId;

var impressao = new Schema ({
    codServico {type: Number},
    date {type: Date},
    custo {type: Number},
    quantPag {type: Number, min: 1}
})

module.exports = mongoose.model('Impressao', impressao);
