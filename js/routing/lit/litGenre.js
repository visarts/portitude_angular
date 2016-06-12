(function () {
  angular.module('route.lit.genre', ['service.lit'])
  .config(litGenreConfig)
  .controller('litGenreCtrl', litGenreCtrl);

  litGenreConfig.$inject = ['$routeProvider'];

  function litGenreConfig($routeProvider) {
    $routeProvider
      .when('/literature/author', {
        templateUrl: 'templates/lit/litAuthor.tpl.html', 
        controller: 'litGenreCtrl'
      });
  }

  //litAuthorCtrl.$inject = [];

  function litGenreCtrl() {
  
  }
})();


