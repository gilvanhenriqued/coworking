angular.module('coworking').controller('TicketCtrl', TicketCtrl);

function TicketCtrl($scope, $routeParams, $rootScope, $location, apiSvc) {
var self = this;

self.date = "";
self.custo = "";
self.codBarra = "";


  self.registrarSolicitacaoDeBoleto = function(){
    apiSvc.cadastrarReserva("ticket", self.date, self.custo, self.codBarra)
      .then(function(res){
        if(res.data.success){
          console.log(res.data.result);
          console.log('Solicitação de boleto efetuada com sucesso!');
        }else{
          console.log(res.data);
          $scope.data = res.data;
          $rootScope.$broadcast('evento', {alerta: "erro",
          message: "Erro! Reveja os dados fornecidos."})
        }
      })
  }

}
