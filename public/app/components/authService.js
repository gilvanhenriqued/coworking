angular.module('coworking').service('authSvc', AuthService)

function AuthService($http, $window) {
  var API = "http://localhost:3000/api"
  var self = this;

  self.login = function(email, senha) {
    return $http.post(API + '/authenticate', {
      email: email,
      senha: senha
    })
  }

  self.parseJwt = function() {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse($window.atob(base64));
  }

  self.isAuthed = function() {
    var token = self.getToken();
    if(token){
        var params = self.parseJwt(token);
        return Math.round(new Date().getTime() / 1000) <= params.exp;
    }else{
      return false;
    }
  }

  self.saveToken = function() {
    $window.localStorage['jwtToken'] = token;
  }

  self.getToken = function() {
    $window.localStorage['jwtToken'];
  }
}
