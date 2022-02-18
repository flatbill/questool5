
let myFaunaCollection = 'qtSurveys'
/* Import faunaDB sdk */
const faunadb = require('faunadb')
const q = faunadb.query

exports.handler = async (event, context) => {
  /* configure faunaDB Client with our secret */
  const client = new faunadb.Client({
    secret: process.env.FAUNADB_SERVER_SECRET2
  }) 
  const myCust = event.queryStringParameters.cust 
  const myQid = event.queryStringParameters.qid 
  console.log('myCust:',myCust)
  console.log('myQid:',myQid)
  console.log('Netlify Function qtReadSurvey invoked.')
  console.log('here is qtReadSurvey event:', event)
  
  let myFaunaFetchQuests = 'classes/' + myFaunaCollection + '/'
  return client.query(q.Paginate(q.Match(q.Index('qtSurveysX2'), [myCust,myQid] ),{ size: 500 }))
    .then((response) => {
    const qtSurveysRefs = response.data
    console.log('qtSurveys refs', qtSurveysRefs)
    console.log(`${qtSurveysRefs.length} qtSurveys found`)
    const getAllqtSurveysDataQuery = qtSurveysRefs.map((ref) => {
      return q.Get(ref)
    })
    // then query the refs
    return client.query(getAllqtSurveysDataQuery).then((ret) => {
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
