var mongoose = require('mongoose'),
		Schema = mongoose.Schema,
		ObjectId = Schema.ObjectId;

var boleto = new Schema ({
		tipoServico: {type: String},
    date: {type: Date},
    custo: {type: Number},
    codBarra: {type: Number}
})

module.exports = mongoose.model('Boleto', boleto);
