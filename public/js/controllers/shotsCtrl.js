app.controller('shotsCtrl', ['$scope', 'shotsApi' , function($scope, shotsApi){

	$scope.shots = [];

	shotsApi.query(function(shots) {
		$scope.shots = shots;
	}, function(erro) {
		console.log(erro);
	});


}]);
