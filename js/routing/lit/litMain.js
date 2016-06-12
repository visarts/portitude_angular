(function () {
  angular.module('route.lit.main', ['service.lit'])
  .config(litMainConfig)
  .controller('litMainCtrl', litMainCtrl);

  litMainConfig.$inject = ['$routeProvider'];

  function litMainConfig($routeProvider) {
    $routeProvider
      .when('/literature', {
        templateUrl: 'templates/lit/litMain.tpl.html', 
        controller: 'litMainCtrl'
      });
  }

  //litMainCtrl.$inject = [];

  function litMainCtrl() {
  
  }
})();


