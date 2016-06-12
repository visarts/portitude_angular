(function () {
  angular.module('directive.navigation.side', [])
    .directive('sidenav', function() {
      return {
        restrict: 'E',
        templateUrl: '/templates/directives/sideNav.tpl.html',
        controller: sideNavDirectiveCtrl
      };
  });
  
  function sideNavDirectiveCtrl() {
    
  }
    
})();