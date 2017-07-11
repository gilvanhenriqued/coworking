angular.module('coworking').controller('MainCtrl', MainCtrl);

function MainCtrl($scope, apiSvc) {
var self = this;

$scope.$on('evento', function(erro, args){
  self.event = true;
  if(args.aleta == "erro"){
    self.eventClass = 'alert-danger';
  }else{
    self.eventClass = 'alert-info';
  }

  self.eventMessage = args.message;
})

}
