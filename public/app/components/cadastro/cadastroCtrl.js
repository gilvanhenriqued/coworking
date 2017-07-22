angular.module('coworking').controller('CadastroCtrl', CadastroCtrl);

function CadastroCtrl($scope, $rootScope, $routeParams, $location, apiService) {
var self = this;
  self.email = "";
  self.senha = "";
  self.erro = false;

  self.registrar = function(){
    apiService.cadastrar(self.email, self.senha).then(function(res){
        if(res.data.success){
          console.log(res.data);
          console.log('Cadastro efetuado com sucesso!');
          $location.path('/login');
        }else{
          console.log(res.data);
          $scope.data = res.data;
          $rootScope.$broadcast('evento', {alerta: "erro",
          message: "Erro! O formulário está incompleto ou errado"})
        }
      })
  }
}
