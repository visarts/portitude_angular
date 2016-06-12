(function () {
  angular.module('route.lit.author', ['service.lit'])
  .config(litAuthorConfig)
  .controller('litAuthorCtrl', litAuthorCtrl);

  litAuthorConfig.$inject = ['$routeProvider'];

  function litAuthorConfig($routeProvider) {
    $routeProvider
      .when('/literature/author', {
        templateUrl: 'templates/lit/litAuthor.tpl.html', 
        controller: 'litAuthorCtrl'
      });
  }

  //litAuthorCtrl.$inject = [];

  function litAuthorCtrl() {
  
  }
})();


