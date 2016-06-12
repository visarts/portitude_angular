(function () {
  angular.module('route.lit.geo', ['service.lit'])
  .config(litGeoConfig)
  .controller('litGeoCtrl', litGeoCtrl);

  litGeoConfig.$inject = ['$routeProvider'];

  function litGeoConfig($routeProvider) {
    $routeProvider
      .when('/literature/geography', {
        templateUrl: 'templates/lit/litGeo.tpl.html', 
        controller: 'litGeoCtrl'
      });
  }

  //litMainCtrl.$inject = [];

  function litGeoCtrl() {
  
  }
})();


