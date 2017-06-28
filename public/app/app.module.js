angular.module("coworking", ['ngRoute'])
	.config(function($routeProvider) {
		$routeProvider
			 // visualizar dados do usuario
			.when('/user', {
				templateUrl : 'app/routes/user.html'
			})
			// visualizar servicos
			.when('/services', {
				templateUrl : 'app/routes/services.html'
			})
			// visualizar boletos do usuario
			.when('/tickets', {
				templateUrl : 'app/routes/tickets.html'
			})
			// pagina de login
			.when('/login', {
				templateUrl : 'app/routes/login.html'
			})
			// pagina inicial do coworking
      .when('/home', {
				templateUrl : 'app/routes/home.html'
			})
			.otherwise({
				redirectTo: '/home'
			});
	});
