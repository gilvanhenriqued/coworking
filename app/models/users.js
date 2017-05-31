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

var empresa = new schema ({
  type: object,
  properties: {
    cnpj: {type: Number}
  }
})

var cliente = new schema ({
  type: object,
  properties: {
    cpf: {type: Number},
    genero: {type: String}
  }
})
