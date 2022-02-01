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
    var groups=['50%_strain','70%_strain']
    
    //var myColor = d3.scaleOrdinal()
    //  .domain(groups)
    //  .range(d3.schemeSet2)
    
      d3.select('#selectButton').selectAll('myOptions')
      .data(groups).enter().append('option').text(function(d){return d;})
      .attr('value',function(d){return d;})
    
        // data to plot will be selected on a drop down menu in the end
      var select=document.getElementById('selectButton');
      var value_to_plot=select.options[select.selectedIndex].value;
      var data_to_plot=data[value_to_plot];

    // map the relation between stress and strain values to plot
    var data_plot=data_to_plot.Strain.map(function(d,i){
      return{
        Strain:data_to_plot.Strain[i],
        Stress:data_to_plot.Stress[i]
      }
    });

    var xScale = d3.scaleLinear().domain([0,1]).range([0,width]);
    var yScale = d3.scaleLinear().domain([-0.1,0.1]).range([height,0]);

    // use the d3js line generator
    var lineValues = d3.line()
                 .x(function(d){return xScale(d.Strain)})
                 .y(function(d){return yScale(d.Stress)});

    // Add the line to the plot
    var lineGraph =svg.append('g').append("path")
      .datum(data_plot)
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


    // function to update the line based on selection
    // A function that update the chart
    function update(selectedGroup) {
      // Create new data with the selection?
      var dataFilter = data[selectedGroup];
      console.log('Update function called')
      // add the new line
      var line=svg.append('g').append("path")
      .datum(dataFilter)
      .attr("class", "line")
      .attr('fill','none')
      .attr('stroke','steelblue')
      .attr('stroke-width','2px')
      .attr("d", d3.line()
                   .x(function(d){console.log('change');return xScale(d.Strain)})
                   .y(function(d){return yScale(d.Stress)})
      );
    }

      d3.select("#selectButton").on("change", function(d) {
        // recover the option that has been chosen
        var selectedOption = d3.select(this).property("value")
        // run the updateChart function with this selected option
        update(selectedOption)
    })
});
