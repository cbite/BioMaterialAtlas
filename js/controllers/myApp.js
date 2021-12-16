var app = angular.module('BiomaterialAtlas',[]);
app.controller('FirstController', function($scope,getData,d3Service) {
    $scope.dataisLoaded=false;
    $scope.loadedData=getData.getjson('data/ALP_BMA_json.json');
    $scope.loadedDataHeartvalves=getData.getjson("data/BioMaterialAtlas_StudyInformationHeartValves.json");
    $scope.loadedData.then(function(data){
        // load the data to the dataset in scope
        $scope.data=data.data;
        $scope.dataisLoaded=true;
        $scope.dataStudyDescription=$scope.defineStudyDescription($scope);
        $scope.dataStudyDesign=$scope.defineStudyDesign($scope)
        console.log($scope.dataStudyDescription.Name)
        ;})

    $scope.defineSecondaryScreening=function($scope){
                tmp_secondary_screens=$scope.datasetFiltered[0].SecondaryScreening.split(';')
                $scope.datasetsSecondaryScreening = tmp_secondary_screens

        }

    $scope.defineStudyDesign=function($scope){
            // JSOn file has a field called Design
            StudyDesign=$scope.data.Design; 
            return StudyDesign;
        }

    $scope.defineStudyDescription=function($scope){
            StudyDescription=$scope.data.Description;
            return StudyDescription;
        }

    })
