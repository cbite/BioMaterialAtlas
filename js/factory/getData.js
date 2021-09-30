app.factory('getData',function($http){
    //return $resource('data/BioMaterialAtlas_StudyInformation.json')
    return{
        getjson : function(){
           return $http.get('data/BioMaterialAtlas_StudyInformation.json') // path of the json file
        }}

});

