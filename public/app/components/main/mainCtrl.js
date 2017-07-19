angular.module('coworking').controller('MainCtrl', MainCtrl);

function MainCtrl($scope, apiSvc) {
var self = this;



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
