var config = {
    container_id: "plotareagraph",
    server_url: 'bolt://localhost:7687',
    server_user: "neo4j",
    server_password: "password",
    labels: {
        [NeoVis.NEOVIS_DEFAULT_CONFIG]: {
             "caption": "defaultCaptionProperty",
             "size": "defaultPagerank",
             "community": "defaultCommunity"
             //"sizeCypher": "defaultSizeCypher"
                                
        }
    },
    relationships: {
        [NeoVis.NEOVIS_DEFAULT_CONFIG]: {
             "thickness": "defaultThicknessProperty",
             "caption": "defaultCaption"
        }
    },
    initial_cypher: "MATCH (n)-[r]->(m) RETURN n,r,m"
};

viz = new NeoVis.default(config);
viz.render();