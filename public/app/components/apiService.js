angular.module('coworking').service('apiSvc', ApiService)

function ApiService($http) {
  var API = "http://localhost:3000/api"

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
    return $http.post(API + '/services', {
      tipoServico: 'reserva',
      date: date,
      custo: custo,
      plano: plano,
      tipoReserva: tipoReserva,
      token: res.data.token
    })
  }

}
