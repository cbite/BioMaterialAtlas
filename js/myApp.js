var app = angular.module('myApp', []);
app.controller('FirstController', function($scope) {
    $scope.dataset =[{name : 'Hepatocytes',date:'21-04-2021',cellline:"Hepatocytes",leadauthor:'J. de Boer',leadpi:'J. de Boer',topochip:"Polystyrene TopoChip"}
                     ,{name : 'Adypocytes',date:'25-06-2018',cellline:"adypocytes",topochip:"Polystyrene TopoChip"}
                    ,{name: 'Phenome28',date:"01-01-2001",celline:"Human Stem Cells",topochip:"Polystyrene TopoChip"}];

    $scope.selectData=function(){
        $scope.dataSelected=$scope.dataset.filter(dataset => dataset.name == this.data.name);
        console.log($scope.dataSelected);
    };


});
app.controller('showhidectrl', function ($scope) {
    $scope.showval = false;
    $scope.hideval = false;
    $scope.isShowHide = function (param) {
    if (param == "show") {
    $scope.showval = true;
    $scope.hideval = true;
    }
    else if (param == "hide") {
    $scope.showval = false;
    $scope.hideval = false;
    }
    else {
    $scope.showval = false;
    $scope.hideval = false;
    }
    }
    });