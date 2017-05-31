var schema = new schema ({
  type: object,
  properties: {
    cnpj: {type: Number}
    name: { type: String },
    endereco: {type: String},
    email: {type: String},
    senha: {type: String},
    dataFundacao: {type: Date}
  }
})
