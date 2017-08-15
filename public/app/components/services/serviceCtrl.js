angular.module('coworking').controller('ServiceCtrl', ServiceCtrl);

function ServiceCtrl($scope, $routeParams, $rootScope, $location, apiSvc) {
var self = this;

self.date = "";
self.plano = "";
self.tipoReserva = "";
self.quantPag = "";
self.quantCop = "";
self.horario =  "";
self.typePapel = "";
self.alturaPapel = "";
self.larguraPapel = "";

  self.registrarReserva = function(){
    apiSvc.cadastrarReserva("reserva", self.horario, self.date, self.plano, self.tipoReserva)
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

  self.registrarReuniao = function(){
    apiSvc.cadastrarReserva("reuniao", self.date, self.custo)
      .then(function(res){
        if(res.data.success){
          console.log(res.data.result);
          console.log('Reunião marcada com sucesso!');
        }else{
          console.log(res.data);
          $scope.data = res.data;
          $rootScope.$broadcast('evento', {alerta: "erro",
          message: "Erro! Reveja os dados fornecidos."})
        }
      })
  }

  self.registrarImpressao = function(){
    apiSvc.salvarDadosDeImpressao("impressao", self.date, self.custo, self.quantPag, self.quantCop,
    self.horario, self.typePapel, self.alturaPapel, self.larguraPapel)
      .then(function(res){
        if(res.data.success){
          console.log(res.data.result);
          console.log('Dados de impressão salvos com sucesso!');
        }else{
          console.log(res.data);
          $scope.data = res.data;
          $rootScope.$broadcast('evento', {alerta: "erro",
          message: "Erro! Reveja os dados fornecidos."})
        }
      })
  }

}
