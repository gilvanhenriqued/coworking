angular.module('coworking').controller('AuthenticationCtrl', AuthenticationCtrl);

function AuthenticationCtrl($scope, apiSvc) {
var self = this;
  self.email = "";
  self.senha = "";

  self.autenticar = function(){
    apiSvc.autenticar(self.email, self.senha);
  }

}
