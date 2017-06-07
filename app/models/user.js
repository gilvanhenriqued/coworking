var mongoose = require('mongoose'),
		Schema = mongoose.Schema,
		ObjectId = Schema.ObjectId;

var user  = new schema ({
  type: object,
  properties : {
    name: { type: String },
    endereco: {type: String},
    email: {type: String},
    senha: {type: String},
    dataNascimento: {type: Date},
    tipoCliente: {type: String }
  }
})

module.exports = mongoose.model('User', User);
