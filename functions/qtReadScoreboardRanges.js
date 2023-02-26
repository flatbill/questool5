
let myFaunaCollection = 'qtScoreboardRanges'
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

  console.log('Netlify Function qtScoreboardRanges invoked.')
  console.log(myCust,myQid)
  
  return client.query(q.Paginate(q.Match(q.Index('qtScoreboardRangesX1'),[myCust,myQid]),{ size: 800 }))
    .then((response) => {
    const qtScoreboardRangesRefs = response.data
    console.log('qtScoreboardRangess refs', qtScoreboardRangesRefs)
    console.log(`${qtScoreboardRangesRefs.length} qtScoreboard Ranges found`)
    const getAllqtScoreboardRangesDataQuery = qtScoreboardRangesRefs.map((ref) => {
      return q.Get(ref)
    })
    // then query the refs
    return client.query(getAllqtScoreboardRangesDataQuery).then((ret) => {
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
//   return urlPath.match(/([^\/]*)\/*$/)[0]
// }