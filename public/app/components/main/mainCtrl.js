angular.module('coworking').controller('MainCtrl', MainCtrl);

function MainCtrl($scope, apiSvc, authSvc) {
var self = this;

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
