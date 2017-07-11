angular.module('coworking').service('authSvc', AuthService)

function AuthService($http) {
  var API = "http://localhost:3000/api"

  this.login = function(email, senha){
    return $http.post(API + '/authenticate', {
      email: email,
      senha: senha
    })
  }

}
