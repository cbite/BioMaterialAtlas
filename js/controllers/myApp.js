var app = angular.module('BiomaterialAtlas',['ngResource']);
app.controller('FirstController', function(getData,$scope) {
    $scope.dataset=null;
    $scope.loadedData=getData.getjson();
    $scope.loadedData.then(function(data){
        // load the data to the dataset in scope
            $scope.dataset=data.data;
    /*
    $scope.selectData=function(){
        $scope.datasetFiltered=$scope.dataset.filter(dataset => dataset.Name == this.data.Name);
        $scope.fileNames=$scope.getSource($scope.datasetFiltered.selectedsurfaces);

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
    */
    $scope.datasetFiltered=$scope.dataset.filter(dataset => dataset.Name == 'Hepatocytes');
    console.log($scope.datasetFiltered)
    //$scope.fileNames=$scope.getSource($scope.datasetFiltered[0].selectedsurfaces);
    })

});
