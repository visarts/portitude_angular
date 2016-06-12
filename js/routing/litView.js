var litView = angular.module('lit.view', ['ngRoute']);

litRoute.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/literature, {templateUrl: 'templates/lit/litMain.tpl.html', controller: 'litMain.ctrl'}).
  when('/literature/:author', {templateUrl: 'templates/lit/litAuthor.tpl.html', controller: 'litAuthor.ctrl'}).
  when('/literature/:country', {templateUrl: 'templates/lit/litCountry.tpl.html', controller: 'litCountry.ctrl'});
}]);