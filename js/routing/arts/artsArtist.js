(function () {
  angular.module('route.arts.artist', ['service.arts'])
  .config(artsArtistConfig)
  .controller('artsArtistCtrl', artsArtistCtrl);

  artsArtistConfig.$inject = ['$routeProvider'];

  function artsArtistConfig($routeProvider) {
    $routeProvider
      .when('/arts/artist', {
        templateUrl: 'templates/arts/artsArtist.tpl.html', 
        controller: 'artsArtistCtrl'
      });
  }

  //artsArtistCtrl.$inject = [];

  function artsArtistCtrl() {
  
  }
})();


