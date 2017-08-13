angular.module('coworking').service('apiSvc', ApiService)

function ApiService($http, authSvc) {
  var API = "http://localhost:3000/api"
  var token = authSvc.getToken()


  this.cadastrarCliente = function(nome, endereco, email, senha, tipoCliente,
     cpf, genero, dataNascimento){
    return $http.post(API + '/users', {
      nome: nome,
      endereco: endereco,
      email: email,
      senha: senha,
      tipoCliente: 'cliente',
      cpf: cpf,
      genero: genero,
      dataNascimento: dataNascimento
    })
  }

  this.cadastrarEmpresa = function(nome, endereco, email, senha, tipoCliente,
     cnpj, dataFundacao){
    return $http.post(API + '/users', {
      nome: nome,
      endereco: endereco,
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

}
