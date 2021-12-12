
let myFaunaCollection = 'qtScores'
/* Import faunaDB sdk */
const faunadb = require('faunadb')
const q = faunadb.query

exports.handler = (event, context) => {
  /* configure faunaDB Client with our secret */
  const client = new faunadb.Client({
    secret: process.env.FAUNADB_SERVER_SECRET2
  }) 
  const myCust = event.queryStringParameters.cust 
  const myQid = event.queryStringParameters.qid 
  const myUser = event.queryStringParameters.user
  const myScoreboardName = event.queryStringParameters.scoreboardName

  console.log('Netlify Function qtReadScore invoked.')
  console.log(myCust,myQid,myUser,myScoreboardName)
  // let myFaunaDbName = 'alaska6'  // not needed cuz FAUNADB_SERVER_SECRET2 is tied to database alaska6.
  
  let myFaunaFetchUser = 'classes/' + myFaunaCollection + '/'
  return client.query(q.Paginate(q.Match(q.Index('qtScoresX3'),[myCust,myQid,myUser,myScoreboardName]),{ size: 500 }))
    .then((response) => {
    const qtScoreRefs = response.data
    console.log('qtScore refs', qtScoreRefs)
    console.log(`${qtScoreRefs.length} qtScores found`)
    const getAllqtScoreDataQuery = qtScoreRefs.map((ref) => {
      return q.Get(ref)
    })
    // then query the refs
    return client.query(getAllqtScoreDataQuery).then((ret) => {
      return {
        statusCode: 200,
        headers: {'Access-Control-Allow-Origin': '*'},
        body: JSON.stringify(ret)
      }
    })
  }).catch((error) => {
    console.log('error', error)
    return {
      statusCode: 400,
      body: JSON.stringify(error)
    }
  })  
}
