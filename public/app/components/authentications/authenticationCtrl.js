angular.module('coworking').controller('AuthenticationCtrl', AuthenticationCtrl);

function AuthenticationCtrl($scope, $rootScope, $routeParams, $location, authSvc) {
var self = this;
  self.email = "";
  self.senha = "";
  self.erro = false;

  self.autenticar = function(){
    authSvc.login(self.email, self.senha).then(function(res){
        if(res.data.success){
          console.log(res.data);
          console.log('Logado com sucesso!');
          $location.path('/home');
        }else{
          console.log(res.data);
          $scope.data = res.data;
          $rootScope.$broadcast('evento', {alerta: "erro", message: "Erro! Email ou senha incorretos."})
        }
      })
  }
}
