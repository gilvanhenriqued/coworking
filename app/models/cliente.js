var mongoose = require('mongoose'),
		Schema = mongoose.Schema,
		ObjectId = Schema.ObjectId;

var cliente = new Schema ({
    cpf: {type: String},
    genero: {type: String},
    nome: { type: String},
		pais: { type: String},
		estado: { type: String},
    cidade: {type: String},
		bairro:{type: String},
		rua:{type: String},
		numero:{type: Number},
    email: {type: String},
    senha: {type: String},
    dataNascimento: {type: Date},
    tipoCliente: {type: String}
})

module.exports = mongoose.model('Cliente', cliente);
