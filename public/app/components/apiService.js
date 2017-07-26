angular.module('coworking').service('apiSvc', ApiService)

function ApiService($http) {
  var API = "http://localhost:3000/api"

  this.cadastrarCliente = function(nome, endereco, email, senha, tipoCliente, cpf, genero, dataNascimento){
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

  this.cadastrarEmpresa = function(nome, endereco, email, senha, tipoCliente, cpf, genero, dataNascimento){
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



}
