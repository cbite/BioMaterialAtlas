var userName='neo4j';
var password='password';
var driver = neo4j.driver(
    'bolt://localhost:7687',
    neo4j.auth.basic(userName, password),
  )

async function main(searchTerm){
    try {
        await driver.verifyConnectivity();
        console.log('Driver created')
    }catch(error){
        console.log('Connectivy failed')
    }


    const session = driver.session({database: 'neo4j'});
try{
    var resultQuery=session
    .readTransaction((tx) => 
       tx.run("MATCH (n:"+searchTerm+") RETURN n")
    ).then(results => results.records.map((record) => {
       return {
              ID: record.get('n')
       }
    }))
    console.log(resultQuery)
}catch(error){
    console.log('Unable to execute query');
}
}

main(searchTerm='Document')
