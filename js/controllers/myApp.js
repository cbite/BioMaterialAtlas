var app = angular.module('BiomaterialAtlas',[]);
app.controller('FirstController', function($scope,getData,d3Service) {
    $scope.dataisLoaded=false;
    $scope.loadedData=getData.getjson('data/ALP_BMA.json');
    $scope.loadedDataHeartvalves=getData.getjson("data/BioMaterialAtlas_StudyInformationHeartValves.json");
    $scope.loadedData.then(function(data){
        // load the data to the dataset in scope
        $scope.data=data.data;
        $scope.dataisLoaded=true;
        $scope.dataStudyDescription=$scope.defineStudyDescription($scope);
        $scope.dataStudyDesign=$scope.defineStudyDesign($scope);
        $scope.dataStudyResults=$scope.defineStudyResults($scope);
        $scope.imagesToShow=$scope.defineImagesToShow($scope);
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
    
    $scope.defineStudyResults=function($scope){
        // give an overview of the study results
        StudyResults=$scope.data.Results;
        
        return StudyResults;
    }

    $scope.defineImagesToShow=function($scope){
        // Data sheet contains a value for showImagesSurface
        if($scope.data.Results.ImageForSurfaces){
            var images= new Array();
            const surface='Surface_FeatureIdx_'
            // separate the image names based on comma separated 
            const tmp_images=$scope.data.Results.ImagesStudyDesign.split(',')
            // join '.png' to each elemenet
            tmp_images.forEach(element =>{
                var tmp_element=element.concat('.png')
                var tmp_element_complete=surface.concat(tmp_element);
                images.push(tmp_element_complete);
            })
            return images;
        }
        else{
            // Should not plot any images thus return null object
            var images = null;
            return images;
        }
    }

    })
