angular.module('coworking').controller('AuthenticationCtrl', AuthenticationCtrl);

function AuthenticationCtrl($scope, $rootScope, $routeParams, $location, authSvc) {
var self = this;
  self.email = "";
  self.senha = "";
  self.erro = false;

  self.handleRequest = function(res) {
    var token = res.data ? res.data.token : null;
    if(token){
      console.log(token);
      authSvc.saveToken(token);
      $location.path('/home');
    }
  }

  self.autenticar = function(){
    authSvc.login(self.email, self.senha).then(function(res){
        if(res.data.success){
          console.log(res.data);
          console.log('Logado com sucesso!');
          self.handleRequest(res);
        }else{
          console.log(res.data);
          $scope.data = res.data;
          $rootScope.$broadcast('evento', {alerta: "erro", message: "Erro! Email ou senha incorretos."})
        }
      })
  }
}
