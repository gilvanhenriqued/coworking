var mongoose = require('mongoose'),
		Schema = mongoose.Schema,
		ObjectId = Schema.ObjectId;

var empresa = new Schema ({
    cnpj: {type: String},
    nome: { type: String },
		pais: { type: String},
		estado: { type: String},
    cidade: {type: String},
		bairro: {type: String},
		rua: {type: String},
		numero:{type: Number},
    email: {type: String},
    senha: {type: String},
    dataFundacao: {type: Date},
    tipoCliente: {type: String}
})

module.exports = mongoose.model('Empresa', empresa);
