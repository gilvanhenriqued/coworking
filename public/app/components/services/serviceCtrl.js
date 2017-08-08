angular.module('coworking').controller('ServiceCtrl', ServiceCtrl);

function ServiceCtrl($scope, $routeParams, $rootScope, $location, apiSvc) {
var self = this;

self.date = "";
self.custo = "";
self.plano = "";
self.tipoReserva = "";

  self.registrarReserva = function(){
    apiSvc.cadastrarReserva("reserva", self.date, self.custo, self.plano, self.tipoReserva)
      .then(function(res){
        if(res.data.success){
          console.log(res.data.result);
          console.log('Reserva efetuada com sucesso!');
        }else{
          console.log(res.data);
          $scope.data = res.data;
          $rootScope.$broadcast('evento', {alerta: "erro",
          message: "Erro! Reveja os dados fornecidos."})
        }
      })
  }

}
