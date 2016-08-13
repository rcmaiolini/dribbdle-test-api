app.factory('shotsApi', ['$resource', function($resource) {
	var apiUrl = 'https://api.dribbble.com/v1';
	var token = '?access_token=b6e52eda90d048997dc4469be17b975d3d35167c9d23eed5b486fac91b2b2b74&page=1&per_page=28';

	return $resource(apiUrl + '/shots' + token);

}]);
