var mongoose = require('mongoose'),
		Schema = mongoose.Schema,
		ObjectId = Schema.ObjectId;

var cliente = new Schema ({
    codUser: {type: Number},
    cpf: {type: String},
    genero: {type: String},
    name: { type: String },
    endereco: {type: String},
    email: {type: String},
    senha: {type: String},
    dataNascimento: {type: Date},
    tipoCliente: {type: String}
})

module.exports = mongoose.model('Cliente', cliente);
