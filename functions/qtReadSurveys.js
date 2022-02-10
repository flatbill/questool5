
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
  console.log('myCust:',myCust)
  console.log('Netlify Function qtReadSurveys invoked.')
  console.log('here is qtReadSurveys event:', event)
  // let myFaunaDbName = 'alaska6'  // not needed cuz FAUNADB_SERVER_SECRET2 is tied to database alaska6.
  
  let myFaunaFetchQuests = 'classes/' + myFaunaCollection + '/'
  return client.query(q.Paginate(q.Match(q.Index('qtSurveysX1'), [myCust] ),{ size: 500 }))
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
