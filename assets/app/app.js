var aplicacion = angular.module("pokemon", ['ui.router']);

aplicacion.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/inicio");

  $stateProvider
    .state('inicio', {
      url: '/inicio',
      templateUrl: 'vistas/inicio.html',
      // controller: 'InicioCtrl'
    })
    .state('pokemon', {
      url: '/pokemon',
      templateUrl: 'vistas/pokemon.html',
      controller: 'PokemonCtrl'
    });
});
