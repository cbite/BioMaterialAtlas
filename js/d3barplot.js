// set the dimensions and margins of the graph
var margin = {top: 10, right: 30, bottom: 40, left: 60},
    width = 300 - margin.left - margin.right,
    height = 250 - margin.top - margin.bottom;


    // append the svg object to the body of the page


d3.csv("data/dataqpcr.csv").then(function(data) {
            data.forEach(function(d) {
                d.geneid = d.Gene;
                d.surface=d.Surface;
                d.values=+d.Value;
                d.timepoint=d.Timepoint

              });
            /*var svg = d3.select("#plotbardiv").append("svg")
                          .attr("width", width + margin.left + margin.right)
                          .attr("height", height + margin.top + margin.bottom)
                          .append("g")
                          .attr("transform","translate(" + margin.left + "," + margin.top + ")");
            
            
            var x = d3.scaleBand().domain(data.map(function(d) { return d.surface; })).rangeRound([ 0, width ]).padding(0.1);
            var x1 = d3.scaleBand();
            var y = d3.scaleLinear()
                      .domain([0, d3.max(data, function(d) { return +d.values; })])
                      .range([ height, 0 ]);
            var groups = data.columns.slice(1)
            console.log(x1)
            // Another scale for subgroup position?
            var xSubgroup = d3.scaleBand()
            .domain(data.map(function(d){return d.timepoint}))
            .range([0, x.bandwidth()])
            .padding([0.05])

            // color palette = one color per subgroup
            var color = d3.scaleOrdinal()
              .domain(data.map(function(d) { return d.timepoint; }))
              .range(['#e41a1c','#377eb8','#4daf4a'])
            */
              var svg = d3.select("#plotbardiv").append("svg")
              .attr("width", width + margin.left + margin.right)
              .attr("height", height + margin.top + margin.bottom)
              .append("g")
              .attr("transform","translate(" + margin.left + "," + margin.top + ")");
            // append the rectangles for the bar chart
            const subgroups = data.columns.slice(1)
            const groups = data.map(d => d.surface)

            // Add X axis
            const x = d3.scaleBand()
                .domain(groups)
                .range([0, width])
                .padding([0.2])
            svg.append("g")
              .attr("transform", `translate(0, ${height})`)
              .call(d3.axisBottom(x).tickSize(0));

            // Add Y axis
            const y =  d3.scaleLinear()
            .domain([0, d3.max(data, function(d) { return +d.values; })])
            .range([ height, 0 ]);
            svg.append("g")
              .call(d3.axisLeft(y));

            // Another scale for subgroup position?
            const xSubgroup = d3.scaleBand()
              .domain(groups)
              .range([0, x.bandwidth()])
              .padding([0.05])
            // color palette = one color per subgroup
            const color = d3.scaleOrdinal()
              .domain(subgroups)
              .range(['#e41a1c','#377eb8','#4daf4a'])

            // Show the bars
            svg.append("g")
              .selectAll("g")
              // Enter in data = loop group per group
              .data(data)
              .join("g")
                .attr("transform", d => `translate(${x(d.surface)}, 0)`)
              .selectAll("rect")
              .data(function(d) { return subgroups.map(function(key) { return {key: key, value: d[key]}; }); })
              .join("rect")
                .attr("x", d => xSubgroup(d.timepoint))
                .attr("y", d => y(d.value))
                .attr("width", xSubgroup.bandwidth())
                .attr("height", d => height - y(d.value))
                .attr("fill", d => color(d.key));
                                    
                      var yAxis=svg.append("g").call(d3.axisLeft(y));
        
            });
           