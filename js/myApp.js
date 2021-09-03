var app = angular.module('myApp', []);
app.controller('FirstController', function($scope) {
    $scope.message = 'Hello from FirstController';
    $scope.second2 = 'Area to display study characteristics';
    $scope.dataset =[{name : 'Hepatocytes',date:'21-04-2021'}
                     ,{name : 'Adypocytes',date:'25-06-2018'}
                    ,{name: 'Phenom28',date:"01-01-2001"}];
});
