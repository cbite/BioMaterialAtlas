// set the dimensions and margins of the graph
var margin = {top: 10, right: 30, bottom: 40, left: 60},
    width = 300 - margin.left - margin.right,
    height = 250 - margin.top - margin.bottom;

// append the svg object to the body
var svg = d3.select('#div-for-barchar').append('svg')
            .attr('width',width+margin.left+margin.right)
            .attr('height',height+margin.top +margin.bottom)
            .append('g')
            .attr('transform',"translate(" + margin.left + "," + margin.top + ")");

// stress and strain come from a nested json file

d3.json('data/21G7_StressStrain.json',function(data){
    console.log(data['50%_strain'].Stress)
    // build x-axis
    var x = d3.scaleLinear().domain(0,0.5).range([0,width]);
    var y = d3.scaleLinear().domain(0,1).range([0,height]);

    svg.append('g').attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));
    svg.append("g")
      .call(d3.axisLeft(y));

    svg.append('path')
       .datum(data['50%_strain'])
       .attr('fill','none')
       .attr('stroke','red')
       .attr('stroke-width',1.5)
       .attr('d',d3.line()
            .x(function(d){return x(d.Strain)})
            .y(function(d){return y(d.Stress)})
       )

});