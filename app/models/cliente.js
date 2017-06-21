var mongoose = require('mongoose'),
		Schema = mongoose.Schema,
		ObjectId = Schema.ObjectId;

var cliente = new Schema ({
    cpf: {type: String},
    genero: {type: String},
    nome: { type: String },
    endereco: {type: String},
    email: {type: String},
    senha: {type: String},
    dataNascimento: {type: Date},
    tipoCliente: {type: String}
})

module.exports = mongoose.model('Cliente', cliente);
