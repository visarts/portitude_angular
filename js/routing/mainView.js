var mainView = angular.module('main.view', ['arts.view', 'lit.view', 'ngRoute']);

mainView.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'index.html'});
}]);