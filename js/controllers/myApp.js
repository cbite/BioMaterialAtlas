var app = angular.module('BiomaterialAtlas',[]);
app.controller('FirstController', function($scope,getData,d3Service) {
    $scope.dataisLoaded=false;
    $scope.loadedData=getData.getjson('data/BioMaterialAtlas.json');
    $scope.loadedData.then(function(data){
        // load the data to the dataset in scope
        $scope.data=data.data;
        console.log($scope.data)
        // Select the first study to start the database
        $scope.datasetSelected=$scope.data.ALP
        $scope.selectData=function(){
            var selected_name=this.name.Description.Name
            // select the data based on the button click
            var tmp_data_all=Object.values($scope.data);
            // filter through the data to find the name
            tmp_data_all.forEach(element =>{
                // see if the element study description name is equal to the name of the button
                if(element.Description.Name==selected_name){
                    $scope.datasetSelected=element;
                }

            })
            $scope.dataStudyDescription=$scope.defineStudyDescription($scope);
            $scope.dataStudyDesign=$scope.defineStudyDesign($scope);
            $scope.dataStudyResults=$scope.defineStudyResults($scope);
            $scope.imagesToShow=$scope.defineImagesToShow($scope);
        }

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
            StudyDesign=$scope.datasetSelected.Design; 
            return StudyDesign;
        }

    $scope.defineStudyDescription=function($scope){
            StudyDescription=$scope.datasetSelected.Description;
            return StudyDescription;
        }
    
    $scope.defineStudyResults=function($scope){
        // give an overview of the study results
        StudyResults=$scope.datasetSelected.Results;
        return StudyResults;
    }

    $scope.defineImagesToShow=function($scope){
        // Data sheet contains a value for showImagesSurface
        var images= new Array();
        if($scope.datasetSelected.Images.ImagesToDisplay){
            // Check if image class is TE heart valve, TopoChip or Supramolecular
            // Images are from TopoChip studies
            const surface='Surface_FeatureIdx_'
            // separate the image names based on comma separated 
            const tmp_images=$scope.datasetSelected.Images.ImagesStudyDesign.split(',')
            // join '.png' to each elemenet
            tmp_images.forEach(element =>{
                var tmp_element=element.concat('.png')
                var tmp_element_complete=surface.concat(tmp_element);
                images.push(tmp_element_complete);
            })
            return images;
        }
        else{
            // TO DO: if imagesToDisplay is FALSE there should be no image displayed
            // Should not plot any images thus return null object
            var images = null;
            return images;
        }
    }

    })
