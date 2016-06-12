(function () {
  angular.module('directive.header', [])
    .directive('header', function() {
      return {
        restrict: 'E',
        templateUrl: '/templates/directives/header.tpl.html',
        controller: headerDirectiveCtrl
      };
  });
  
  function headerDirectiveCtrl() {
    
  }
    
})();