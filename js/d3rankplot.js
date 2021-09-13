// set the dimensions and margins of the graph
var margin = {top: 10, right: 30, bottom: 40, left: 60},
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

var allGroup = ["CD81", "Count"]

// add the options to the button
    d3.select("#selectButton")
      .selectAll('myOptions')
     	.data(allGroup)
      .enter()
    	.append('option')
      .text(function (d) { return d; }) // text showed in the menu
      .attr("value", function (d) { return d; }) 
// append the svg object to the body of the page
var svg = d3.select("#plotarea")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");



    d3.csv("data/data.csv").then(function(data) {
        data.forEach(function(d) {
            d.id = +d.id;
            d.rank=+d.rank;
            d.Count=+d.Count;
            d.CD81=+d.CD81;
          });
          console.log(data[0]);

        // Add X axis --> it is a date format
        var x = d3.scaleLinear()
        .domain([0, d3.max(data, function(d) { return +d.rank; })])
        .range([ 0, width ]);
        svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));

        // Add Y axis
        var y = d3.scaleLinear()
        .domain([0, d3.max(data, function(d) { return +d.CD81; })])
        .range([ height, 0 ]);
        var yAxis=svg.append("g")
        .call(d3.axisLeft(y));

            svg.append("text")
            .attr("class", "x label")
            .attr("text-anchor", "end")
            .attr("x", width)
            .attr("y", height + 30)
            .text("ranking of surfaces");

        svg.append("text")
            .attr("class", "y label")
            .attr("text-anchor", "end")
            .attr("y",-50)
            .attr("x",0)
            .attr("dy", ".75em")
            .attr("transform", "rotate(-90)")
            .text("CD81 intensity");

        // Based on the selected measure, ranking has to be adjusted

        // add a tooltip to show the id
        var div = d3.select("body").append("div")
                    .attr("class", "tooltip")
                    .style("opacity", 0);
       
        

        // add the scatter points
        var circle = svg.append('g')
        .selectAll('dot')
        .data(data)
        .enter()
        .append('circle')
        .attr("cx", function (d) { return x(d.rank); } )
        .attr("cy", function (d) { return y(d.CD81); } )
        .attr("r", 5)
        .style("fill", "#69b3a2")
        .on("mouseover", function(event,d) {
            div.transition()
              .duration(200)
              .style("opacity", .9);
            div.html('Surface: '+ d.id)
              .style("left", (event.pageX) + "px")
              .style("top", (event.pageY - 28) + "px");
            })
          .on("mouseout", function(d) {
            div.transition()
              .duration(500)
              .style("opacity", 0);
            });
        
     

        function update(selectedGroup) {

            // Create new data with the selection?
            var dataFilter = data.map(function(d){return {id:d.id, rank: d.rank, value:d[selectedGroup]} })
            console.log(dataFilter)
            // update the domain of the axis
            y.domain([0, d3.max(dataFilter, function(d) { return +d.value; })])
            // update the axis itself without transition
            yAxis.transition().duration(0).call(d3.axisLeft(y))
            // add the scatter points
            circle.data(dataFilter)
                .transition()
                .duration(1000)
                .attr("cx", function (d) { return x(d.rank); } )
                .attr("cy", function (d) { return y(d.value); } )
                .attr("r", 5)
                .style("fill", "#69b3a2")
            circle.on("mouseover", function(event,d) {
                div.transition()
                  .duration(200)
                  .style("opacity", .9);
                div.html('Surface: '+ d.id)
                  .style("left", (event.pageX) + "px")
                  .style("top", (event.pageY - 28) + "px");
                })
              .on("mouseout", function(d) {
                div.transition()
                  .duration(500)
                  .style("opacity", 0);
                });
            

            }
    
            // When the button is changed, run the updateChart function
            d3.select("#selectButton").on("change", function(d) {
            // recover the option that has been chosen
            var selectedOption = d3.select(this).property("value")
            // run the updateChart function with this selected option
            update(selectedOption)
        })
})