angular.module('coworking').controller('MainCtrl', MainCtrl);

function MainCtrl($scope, $rootScope, $routeParams, $location, apiSvc, authSvc) {
var self = this;

self.nome = "";
self.endereco = "";
self.email = "";
self.senha = "";
self.cpf = "";
self.genero = "";
self.dataNascimento = "";

  self.registrar = function(){
    apiSvc.cadastrar(self.nome, self.endereco, self.email, self.senha, self.cpf, self.genero, self.dataNascimento)
      .then(function(res){
        if(res.data.success){
          console.log(res.data);
          console.log('Cadastro efetuado com sucesso!');
          $location.path('/login');
        }else{
          console.log(res.data);
          $scope.data = res.data;
          $rootScope.$broadcast('evento', {alerta: "erro",
          message: "Erro! O formulário de cadastro está incompleto ouS errado"})
        }
      })
  }

self.isAuthed = authSvc.isAuthed;

$scope.$on('evento', function(erro, args){
  self.event = true;
  if(args.alerta == "erro"){
    self.eventClass = 'alert-danger';
  }else{
    self.eventClass = 'alert-info';
  }
  self.eventMessage = args.message;
})

self.closeAlert = function(){
    self.event = false;
}

}
