var userName='neo4j';
var password='password';
var driver = neo4j.driver(
    'bolt://localhost:7687',
    neo4j.auth.basic(userName, password),
  )

async function main(){
    try {
        await driver.verifyConnectivity();
        console.log('Driver created')
    }catch(error){
        console.log('Connectivy failed')
    }


const session = driver.rxSession({database:'system'})
try{
    var result = session.run('MATCH (n) RETURN n')
    console.log('query executed')
    console.log()
}catch(error){
    console.log('Unable to execute query')
}finally{
 await session.close()
}
}

main()
