aplicacion.controller('PokemonCtrl', ['$scope', '$http',
  function($scope, $http) {

    $scope.pokemones = [];

    $http({
      method: 'GET',
      url: 'http://localhost:1337/Pokemon'
    }).then(
      function success(respuesta) {
        console.log('respuesta de GET', respuesta);
        $scope.pokemones = respuesta.data;
        console.log($scope.pokemones);
      },
      function error(error) {
        console.log(error);
      });

    $scope.nuevoPokemon = {};

    $scope.ingresarPokemon = function() {
      console.log($scope.nuevoPokemon);
      $http({
        method: 'POST',
        url: 'http://localhost:1337/Pokemon',
        data: $scope.nuevoPokemon
      }).then(
        function success(respuesta) {
          console.log('respuesta', respuesta);
          $scope.pokemones.push(respuesta.data);
          $scope.nuevoPokemon = {};
        },
        function error(error) {
          console.log(error);
        });
    }

    $scope.editarPokemon = function(pokemon, indice) {
      console.log(pokemon);
      $http({
        method: 'PUT',
        url: 'http://localhost:1337/Pokemon/' + pokemon.id,
        data: pokemon
      }).then(
        function success(respuesta) {
          console.log('respuesta', respuesta);
          $scope.pokemones[indice] = respuesta.data;
        },
        function error(error) {
          console.log(error);
        });
    }

    $scope.eliminarPokemon = function(pokemon, indice) {
      console.log(pokemon);
      $http({
        method: 'DELETE',
        url: 'http://localhost:1337/Pokemon/' + pokemon.id,
      }).then(
        function success(respuesta) {
          console.log('respuesta', respuesta);
          $scope.pokemones.splice(indice, 1);
        },
        function error(error) {
          console.log(error);
        });
    }
  }
]);
