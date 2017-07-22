angular.module('coworking').service('apiSvc', ApiService)

function ApiService($http) {
  var API = "http://localhost:3000/api"

  this.autenticar = function(email, senha){
    return $http.post(API + '/authenticate', {
      email: email,
      senha: senha
    })
  }
  // 
  // this.cadastrar = function(nome, endereco, email, senha, tipoCliente) {
  //     nome: req.body.nome,
  //     endereco: req.body.endereco,
  //     email: req.body.email,
  //     senha: req.body.senha,
  //     tipoCliente: req.body.tipoCliente
  //   })
  //
  //   if (user.tipoCliente == 'cliente'){
  //     user.cpf = req.body.cpf
  //     user.genero = req.body.genero
  //     user.dataNascimento = req.body.dataNascimento
  //   }else if(user.tipoCliente == 'empresa'){
  //     user.cnpj = req.body.cnpj
  //     user.dataFundacao = req.body.dataFundacao
  // }

}
