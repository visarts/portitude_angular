(function () {
  angular.module('route.arts.period', ['service.arts'])
  .config(artsPeriodConfig)
  .controller('artsPeriodCtrl', artsPeriodCtrl);

  artsPeriodConfig.$inject = ['$routeProvider'];

  function artsPeriodConfig($routeProvider) {
    $routeProvider
      .when('/arts/period', {
        templateUrl: 'templates/arts/artsPeriod.tpl.html', 
        controller: 'artsPeriodCtrl'
      });
  }

  //artsPeriodCtrl.$inject = [];

  function artsPeriodCtrl() {
  
  }
})();


