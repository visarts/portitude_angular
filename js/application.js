(function () {
  angular.module('main', [
    'ngRoute', 
    'ngTouch',
    'ui.bootstrap', 
    'directives', 
    'routing',
    'service.arts.modal'
  ])
    .config(mainConfig)
    .controller('mainCtrl', mainCtrl);
  
  mainConfig.$inject = ['$routeProvider'];
  
  function mainConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'templates/main.tpl.html',
        controller: 'mainCtrl'
      })
      .otherwise({
        redirectTo: '404.html'
      });
  }
  
  //mainCtrl.$inject = [];
  
  function mainCtrl() {
    
  }
  
})();