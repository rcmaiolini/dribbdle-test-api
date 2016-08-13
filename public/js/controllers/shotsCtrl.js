app.controller('shotsCtrl', ['$scope', 'shotsApi', 'Pagination' , function($scope, shotsApi, Pagination){

	$scope.shots = [];

	shotsApi.query(function(shots) {
		$scope.shots = shots;
		$scope.pagination = Pagination.getNew(12);
		$scope.pagination.numPages = Math.ceil($scope.shots.length/$scope.pagination.perPage);
	}, function(erro) {
		console.log(erro);
	});


}]);
