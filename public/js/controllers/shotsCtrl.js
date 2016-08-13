app.controller('shotsCtrl', ['$scope', 'shotsApi' , function($scope, shotsApi){

  $scope.shots = [];

  shotsApi.query(function(shots) {
		$scope.shots = shots;
    $('.materialboxed').materialbox();
    console.log(shots);
	}, function(erro) {
		console.log(erro);
	});

  $scope.ordenarPor = function(campo){
    console.log(campo);
    $scope.criterioDeOrdenacao = campo;
    $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
  };
}]);
