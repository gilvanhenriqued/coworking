var mongoose = require('mongoose'),
		Schema = mongoose.Schema,
		ObjectId = Schema.ObjectId;

var empresa = new Schema ({
    cnpj: {type: String},
    nome: { type: String },
    endereco: {type: String},
    email: {type: String},
    senha: {type: String},
    dataFundacao: {type: Date},
    tipoCliente: {type: String}
})

module.exports = mongoose.model('Empresa', empresa);
