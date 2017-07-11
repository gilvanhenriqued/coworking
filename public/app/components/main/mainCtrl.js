angular.module('coworking').controller('MainCtrl', MainCtrl);


function MainCtrl($scope, $routeParams, apiSvc, $location) {

  function invocaTelaDeCadastro(){
    $location.path('/cadastro')
  }

}
