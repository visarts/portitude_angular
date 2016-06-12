(function () {
  angular.module('route.arts.main', ['service.arts'])
  .config(artsMainConfig)
  .controller('artsMainCtrl', artsMainCtrl);

  artsMainConfig.$inject = ['$routeProvider'];

  function artsMainConfig($routeProvider) {
    $routeProvider
      .when('/arts', {
        templateUrl: 'templates/arts/artsMain.tpl.html', 
        controller: 'artsMainCtrl'
      });
  }

  artsMainCtrl.$inject = ['$scope'];

  function artsMainCtrl($scope) {
    
  
  }
})();


