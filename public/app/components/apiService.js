angular.module('coworking').service('apiSvc', ApiService)

function ApiService($http) {
  var API = "http://localhost:3000/api"

  // this.getClima = function(cidade) {
  //   return $http.get(API + 'clima/' + cidade)
  // }
  this.autenticar = function(email, senha){
    return $http.post(API + '/authenticate', {
      email: email,
      senha: senha
    })
  }

}
