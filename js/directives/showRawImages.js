app.directive(showRawImages,function(){
    return{
        restrict:'E',
        scope:{
            info:'=',
        },
        templateUrl:'js/directives/showRawImages.html'
    }
})