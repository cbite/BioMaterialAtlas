var s = new sigma(
    {
      renderer: {
        container: document.getElementById('plotareagraph'),
        type: 'canvas'
      },
      settings: {
        edgeLabelSize: 'proportional',
        minArrowSize: 5,
        labelThreshold:15
      }
    }
  );

  
var neo4jConfig = {
    url: 'bolt://localhost:7687',
    user: 'neo4j',
    password: 'password',
    driver: {

    }
  };

  var style = {
    nodes: {
     color: '#654321',
    size: 10,
      
    },
    edges: {
        color: '#040404',
        size:3,
    }
  };

  Neo4jGraph(neo4jConfig, style ,'MATCH (n)-[r]->(m) RETURN n,r,m', {}).then( function(result) {
    // load the graph
    s.graph.read(result);
    // enable drag'n'drop
    console.log(result)
    sigma.plugins.dragNodes(s, s.renderers[0]);
    // start layout
    s.startForceAtlas2();
    setTimeout(() => { s.stopForceAtlas2() }, Math.log(result.nodes.length*result.edges.length)*1000);
   })