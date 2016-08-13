app.config(["$routeProvider", function($routeProvider){

  $routeProvider.when("/", {
    redirectTo: "/shots"
  });

  $routeProvider.when("/shots", {
    templateUrl: "partials/shots.html",
    controller: "shotsCtrl"
  });

  $routeProvider.otherwise({redirectTo: "/shots"});

}]);
