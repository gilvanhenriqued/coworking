var cliente = new schema ({
  type: object,
  properties: {
    cpf: {type: Number},
    genero: {type: String}
    name: { type: String },
    endereco: {type: String},
    email: {type: String},
    senha: {type: String},
    dataNascimento: {type: Date}
  }
})
