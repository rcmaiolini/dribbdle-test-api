app.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider){

  $routeProvider.when("/", {
    redirectTo: "/shots"
  });

  $routeProvider.when("/shots", {
    templateUrl: "partials/shots.html",
    controller: "shotsCtrl"
  });

  $routeProvider.otherwise({redirectTo: "/shots"});

  // use the HTML5 History API
  //$locationProvider.html5Mode(true);

}]);
