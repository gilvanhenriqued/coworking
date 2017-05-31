var servico = new Schema ({
  type: object,
  properties: {
    custo {type: Number},
    date {type: Date},
    descricao {type: String}
  }
})

var impressoes = new Schema ({
  type: object,
  properties: {
    quantPag {type: Number}
  }
})

var boletos = new Schema ({

})

var reunioes = new Schema ({

})

var reservas = new Schema({
  type: objetc,
  properties: {
    plano
  }
})
