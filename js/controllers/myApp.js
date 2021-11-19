var app = angular.module('BiomaterialAtlas',[]);
app.controller('FirstController', function($scope,getData) {
    $scope.dataisLoaded=false;
    $scope.loadedData=getData.getjson('data/BioMaterialAtlas_StudyInformationTopoChip.json');
    $scope.loadedDataHeartvalves=getData.getjson("data/BioMaterialAtlas_StudyInformationHeartValves.json");
    $scope.loadedData.then(function(data){
        // load the data to the dataset in scope
            $scope.dataset=data.data;
            $scope.dataisLoaded=true;
            $scope.datasetFiltered=$scope.dataset.filter(dataset => dataset.Name == 'Hepatocytes'); 
            $scope.selectData=function(){
        $scope.datasetFiltered=$scope.dataset.filter(dataset => dataset.Name == this.data.Name);
        $scope.getSource($scope)
        $scope.defineSecondaryScreening($scope)
        $scope.RawImages=$scope.defineRawImages($scope);
        $scope.SegmentationImages=$scope.defineSegmentationImages($scope);
        ;}

        $scope.getSource=function($scope){
                sub_images=$scope.datasetFiltered[0].SelectedSurfaces.split(',');
                var images=[];
                for(x in sub_images){
                images.push({imagename:sub_images[x],imagefile:'images/TopoImages/Surface_FeatureIdx_'+sub_images[x]+'.png'});
                }
                $scope.fileNames=images
            }
            $scope.getSource($scope)   
        $scope.defineSecondaryScreening=function($scope){
                tmp_secondary_screens=$scope.datasetFiltered[0].SecondaryScreening.split(';')
                $scope.datasetsSecondaryScreening = tmp_secondary_screens

        }

        $scope.defineRawImages=function($scope){
            RawImages=$scope.datasetFiltered[0].RawImages.split(',')
            console.log(RawImages)
            return RawImages
        }
        $scope.defineSegmentationImages=function($scope){
            tmp_segm_images=$scope.datasetFiltered[0].SegmentationImages.split(',')
            var SegmentationImages=[];
            for(x in tmp_segm_images){
                SegmentationImages.push({x})
            }
            return SegmentationImages
        }
        $scope.defineSecondaryScreening($scope)
        $scope.getSource($scope)
        $scope.RawImages=$scope.defineRawImages($scope);
        $scope.SegmentationImages=$scope.defineSegmentationImages($scope);
       
    })
  /*
    // load heart valve studies to scope
    $scope.loadedDataHeartvalves.then(function(data2){ 
        $scope.datasetheart=data2.data;
        $scope.datasetFilteredHeart=$scope.datasetheart.filter(datasetheart => datasetheart.Name == 'In situ tissue engineered heart valves (iValve II - LSH)'); 
        console.log('dit is hart gefilterd')
        console.log($scope.datasetFilteredHeart)
        $scope.selectData=function(){
            $scope.datasetFilteredHeart=$scope.datasetheart.filter(datasetheart => datasetheart.Name ==this.data.Name);
            $scope.getSourceHeartImages($scope)
        };
        


        $scope.getSourceHeartImages=function($scope){
            images_file=$scope.datasetFilteredHeart[0].ImageScaffold.split(';');
            images_name=$scope.datasetFilteredHeart[0].ImageScaffoldName.split(';');
            image_design=$scope.datasetFilteredHeart[0].ImageDesign.split(';');
            var images=[];
            for(x in images_file){
                console.log(x)
            images.push({imagename:images_name[x],imagefile:'images/HeartValves/'+images_file[x]+'.png',image_design:'images/HeartValves/'+images_file[x]+'_scheme.png'});
            }
            $scope.fileNamesHeart=images
            console.log($scope.fileNamesHeart)
        }
        $scope.getSourceHeartImages($scope)
    })
*/
});
