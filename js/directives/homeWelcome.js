app.directive('homeWelcome', function() { 
    return { 
      restrict: 'E', 
      scope: { 
        info: '', 
      }, 
      templateUrl: 'js/directives/homeWelcome.html',
    }; 
  }); 