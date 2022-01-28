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
    // data to plot will be selected on a drop down menu in the end
    var data_to_plot=data['50%_strain']

    // map the relation between stress and strain values to plot
    var data_plot=data_to_plot.Strain.map(function(d,i){
      return{
        Strain:data_to_plot.Strain[i],
        Stress:data_to_plot.Stress[i]
      }
    });

    var xScale = d3.scaleLinear().domain([0,0.5]).range([0,width]);
    var yScale = d3.scaleLinear().domain([-0.1,0.1]).range([height,0]);

    // use the d3js line generator
    var lineValues = d3.line()
                 .x(function(d){return xScale(d.Strain)})
                 .y(function(d){return yScale(d.Stress)});

    // Add the line to the plot
    svg.append("path")
      .data([data_plot])
      .attr("class", "line")
      .attr('fill','none')
      .attr('stroke','steelblue')
      .attr('stroke-width','2px')
      .attr("d", lineValues);

    // Add the axis to the plot
    svg.append('g').attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(xScale));
    svg.append("g")
      .call(d3.axisLeft(yScale));

});