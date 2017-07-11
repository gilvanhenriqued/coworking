angular.module('coworking').controller('AuthenticationCtrl', AuthenticationCtrl);

function AuthenticationCtrl($scope, $rootScape, $routeParams, $location, authSvc) {
var self = this;
  self.email = "";
  self.senha = "";
  self.erro = false;

self.autenticar = function(req, res){
  authSvc.login(self.email, self.senha).then(
    function(res){
      if(res.data.success){
        console.log(res.data);
        $scope.data = res.data;
        $rootScape.$broadcast('erro', {message: "Erro! Email ou senha incorretos."})
      }else{
        self.erro = true;
      }
    }
  )}

}
