
let myFaunaCollection = 'qtSurveys'
/* Import faunaDB sdk */
const faunadb = require('faunadb')
const q = faunadb.query

exports.handler = (event, context) => {
  /* configure faunaDB Client with our secret */
  const client = new faunadb.Client({
    secret: process.env.FAUNADB_SERVER_SECRET2
  }) 

  console.log('Netlify Function qtReadmultSurveys invoked.') // reads all surveys
  
  //return client.query(q.Paginate(q.Match(q.Ref('indexes/qtTeamMembersX1'))))
  return client.query(q.Paginate(q.Documents(q.Collection('qtSurveys'))))
    .then((response) => {
    const qtSurveysRefs = response.data
    console.log('qtSurveys refs', qtSurveysRefs)
    console.log(`${qtSurveysRefs.length} qtSurveys found`)
    const getAllQtSurveysDataQuery = qtSurveysRefs.map((ref) => {
      return q.Get(ref)
    })
    // then query the refs
    return client.query(getAllQtSurveysDataQuery).then((ret) => {
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
