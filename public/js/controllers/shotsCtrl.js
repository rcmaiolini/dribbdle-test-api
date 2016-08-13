app.controller('shotsCtrl', ['$scope', 'shotsApi' , function($scope, shotsApi){

  $scope.shots = [];

  shotsApi.query(function(shots) {
		$scope.shots = shots;
    $('.materialboxed').materialbox();
	}, function(erro) {
		console.log(erro);
	});
}]);
