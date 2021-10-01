app.directive('barPlot', function() { 
    return { 
      restrict: 'E', 
      scope: { 
        info: '=', 
      }, 
      templateUrl: 'js/directives/barPlot.html',
    }; 
  }); 