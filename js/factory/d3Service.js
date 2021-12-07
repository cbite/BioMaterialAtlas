app.factory('d3Service',[function(){
    var d3
    return{
        restruct: 'EA',
        scope:{},
        link: function(scope,element){
            d3Servoce.d3().then(function(d3){
                var svg = d3.select('#plotarea').append('svg').style('width', '100%');
            svg.selectAll('*').remove();


            })
        }
    }

}])