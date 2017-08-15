angular.module('coworking').service('apiSvc', ApiService)

function ApiService($http, authSvc) {
  var API = "http://localhost:3000/api"
  var token = authSvc.getToken()


  this.cadastrarCliente = function(nome, pais, estado, cidade, bairro, rua, numero, email, senha,
    tipoCliente, cpf, genero, dataNascimento){
    return $http.post(API + '/users', {
      nome: nome,
      pais: pais,
      estado: estado,
      cidade: cidade,
      bairro: bairro,
      rua: rua,
      numero: numero,
      email: email,
      senha: senha,
      tipoCliente: 'cliente',
      cpf: cpf,
      genero: genero,
      dataNascimento: dataNascimento
    })
  }

  this.cadastrarEmpresa = function(nome,  pais, estado, cidade, bairro, rua, numero,
    email, senha, tipoCliente, cnpj, dataFundacao){
    return $http.post(API + '/users', {
      nome: nome,
      pais: pais,
      estado: estado,
      cidade: cidade,
      bairro: bairro,
      rua: rua,
      numero: numero,
      email: email,
      senha: senha,
      tipoCliente: 'empresa',
      cnpj: cnpj,
      dataFundacao: dataFundacao
    })
  }

  this.cadastrarReserva = function(tipoServico, date, custo, plano, tipoReserva){
    return $http.post(API + '/services' + '/?token=' + token, {
      tipoServico: 'reserva',
      date: date,
      custo: custo,
      plano: plano,
      tipoReserva: tipoReserva,
    })
  }

  this.cadastrarReuniao = function(tipoServico, date, custo){
    return $http.post(API + '/services', {
      tipoServico: 'reuniao',
      date: date,
      custo: custo,
      token: res.data.token
    })
  }

  this.cadastrarSolicitacaoDeBoleto = function( date, custo, codBarra){
    return $http.post(API + '/tickets', {
      date: date,
      custo: custo,
      codBarra: codBarra,
      token: res.data.token
    })
  }

  this.guardarDadosDeImpressao = function(tipoServico, date, custo, quantPag, quantCop, horario,
   typePapel, alturaPapel, larguraPapel){
    return $http.post(API + '/impressao', {
      tipoServico: impressao,
      date: date,
      custo: custo,
      codBarra: codBarra,
      quantPag: quantPag,
      quantCop: quantCop,
      horario: horario,
      typePapel: typePapel,
      alturaPapel: alturaPapel,
      larguraPapel: larguraPapel,
      token: res.data.token
    })
  }

}
