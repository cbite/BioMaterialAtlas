var app = angular.module('myApp', []);
app.controller('FirstController', function($http,$scope) {
    $http.get('data/BioMaterialAtlas_StudyInformationTopoChip.json').then(function (response) {

        var data = response.data;
        var status = response.status;
        console.log(status)
        var statusText = response.statusText;
        var headers = response.headers;
        var config = response.config;
    
        $scope.dataset = data;
    
    $scope.selectData=function(){
        console.log('function called')
        $scope.datasetFiltered=$scope.dataset.filter(dataset => dataset.Name == this.data.Name);
        $scope.fileNames=$scope.getSource($scope.datasetFiltered.selectedsurfaces);
        $scope.RawImages=$scope.defineRawImages();
        console.log($scope.RawImages)
        $scope.SegmentationImages=$scope.defineSegmentationImages();
        $scope.secondaryScreenInfo=$scope.defineSecondaryScreening();
        ;}
    
    $scope.getSource=function(){
            sub_images=$scope.datasetFiltered.Name.split(',');
            var images=[];
            for(x in sub_images){
               images.push({imagename:sub_images[x],imagefile:'images/TopoImages/Surface_FeatureIdx_'+sub_images[x]+'.png'});
            }
            return images
        }
    $scope.defineSecondaryScreening=function(){
            tmp_secondary_screens=$scope.datasetFiltered.SecondaryScreening.split(';')
            var secondaryScreens=[];
            for(x in tmp_secondary_screens){
                secondaryScreens.push({x})
            }
            return secondaryScreens
    }
    $scope.defineRawImages=function(){
        tmp_images_screen=$scope.datasetFiltered.RawImages.split(',')
        var RawImages=[];
        for(x in tmp_images_screen){
            RawImages.push({x})
        }
        console.log(RawImages)
        return RawImages
    }
    $scope.defineSegmentationImages=function(){
        tmp_segm_images=$scope.datasetFiltered.split(',')
        var SegmentationImages=[];
        for(x in tmp_segm_images){
            SegmentationImages.push({x})
        }
        return SegmentationImages
    }
    $scope.datasetFiltered=$scope.dataset.filter(dataset => dataset.Name == 'Hepatocytes');
    $scope.secondaryScreenInfo=$scope.defineSecondaryScreening();
    $scope.RawImages=$scope.defineRawImages();
    $scope.SegmentationImages=$scope.defineSegmentationImages();
    console.log($scope.RawImages)
    //$scope.fileNames=$scope.getSource($scope.datasetFiltered[0].selectedsurfaces);

    });

});