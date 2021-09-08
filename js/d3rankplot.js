// set the dimensions and margins of the graph
var margin = {top: 10, right: 30, bottom: 40, left: 60},
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#plotarea")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");


    data = [{
        rank: 1,
        wage: 708,
        id: '1384'
    }, {
        rank: 2,
        wage: 704,
        id: '1290'
    }, {
        rank: 3,
        wage: 700,
        id: '1336'
    }, {
        rank: 4,
        wage: 699,
        id: '1401'
    }, {
        rank: 5,
        wage: 692,
        id: '2011'
    }, {
        rank: 6,
        wage: 683,
        id: '1787'
    }, {
        rank: 7,
        wage: 662,
        id: '36'
    }, {
        rank: 8,
        wage: 662,
        id: '1271'
    }, {
        rank: 9,
        wage: 661,
        id: '2068'
    }, {
        rank: 10,
        wage: 245,
        id: '2117'
    },{
        rank: 11,
        wage: 216,
        id: '1084'
    },{ 
        rank: 12,
        wage: 216,
        id: '940'
    },{
        rank: 13,
        wage: 215,
        id: '799'
    },{
        rank: 14,
        wage: 211,
        id: '1657'
    },{
        rank: 15,
        wage: 209,
        id: '1510'
    },{
        rank: 16,
        wage: 207,
        id: '2316'
    },{
        rank: 17,
        wage: 202,
        id: '1408'
    },{
        rank: 18,
        wage: 199,
        id: '811'
    },{
        rank: 19,
        wage: 171,
        id: '611'
    }]


    // Add X axis --> it is a date format
    var x = d3.scaleLinear()
    .domain([0, d3.max(data, function(d) { return +d.rank; })])
      .range([ 0, width ]);
    svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

    // Add Y axis
    var y = d3.scaleLinear()
      .domain([0, d3.max(data, function(d) { return +d.wage; })])
      .range([ height, 0 ]);
    svg.append("g")
      .call(d3.axisLeft(y));

    // add the scatter points
    svg.append('g')
       .selectAll('dot')
       .data(data)
       .enter()
       .append('circle')
       .attr("cx", function (d) { return x(d.rank); } )
      .attr("cy", function (d) { return y(d.wage); } )
      .attr("r", 5)
      .style("fill", "#69b3a2")

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
  
