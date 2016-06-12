var artsView = angular.module('arts.view', ['ngRoute']);

artsRoute.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/arts', {templateUrl: 'templates/arts/artsMain.tpl.html', controller: 'artsMain.ctrl'}).
  when('/arts/:artist', {templateUrl: 'templates/arts/artsArtist.tpl.html', controller: 'artsArtist.ctrl'}).
  when('/arts/:country', {templateUrl: 'templates/arts/artsCountry.tpl.html', controller: 'artsCountry.ctrl'});
}]);