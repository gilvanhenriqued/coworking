angular.module("coworking", ['ngRoute'])
	.config(function($routeProvider) {
		$routeProvider
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
      // pagina de cadastro
			.when('/cadastro', {
				templateUrl : 'app/routes/cadastro.html'
			})

			.when('/impressao', {
				templateUrl : 'app/routes/impressao.html'
			})

			.when('/reserva', {
				templateUrl : 'app/routes/reserva.html'
			})

			.when('/reuniao', {
				templateUrl : 'app/routes/reuniao.html'
			})

			.when('/cadastro2', {
				templateUrl : 'app/routes/cadastro2.html'
			})

			.otherwise({
				redirectTo: '/home'
			});
	});
