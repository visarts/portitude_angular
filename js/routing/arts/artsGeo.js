(function () {
  angular.module('route.arts.geo', ['service.arts'])
  .config(artsGeoConfig)
  .controller('artsGeoCtrl', artsGeoCtrl);

  artsGeoConfig.$inject = ['$routeProvider'];

  function artsGeoConfig($routeProvider) {
    $routeProvider
      .when('/arts/geography', {
        templateUrl: 'templates/arts/artGeo.tpl.html', 
        controller: 'artsGeoCtrl'
      });
  }

  //artsGeoCtrl.$inject = [];

  function artsGeoCtrl() {
  
  }
})();


