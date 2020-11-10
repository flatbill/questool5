
let myFaunaCollection = 'qtAnswers'
/* Import faunaDB sdk */
const faunadb = require('faunadb')
const q = faunadb.query

exports.handler = async (event, context) => {
  /* configure faunaDB Client with our secret */
  const client = new faunadb.Client({
    secret: process.env.FAUNADB_SERVER_SECRET2
  }) 
  const myCust = event.queryStringParameters.cust ;
  const myQid = event.queryStringParameters.qid ;
  console.log('myCust:',myCust)
  console.log('myQid:',myQid)
  console.log('Netlify Function qtDeleteAllAnswers invoked.')
  console.log('here is qtDeleteAllAnswers event:', event)
  //let myFaunaFetchQuests = 'classes/' + myFaunaCollection + '/'
  //
  return client.query(
    q.Delete(
        Select(
         "ref",
         Get(
           Match(Index("qtAnswersX1"), [myCust,myQid])
    )))
  )
    .then((response) => {
      const qtRulesRefs = response.data
      console.log('running .then of qtDeleteAllAnswers')
      return {
        statusCode: 200,
        headers: {'Access-Control-Allow-Origin': '*'},
        body: JSON.stringify(ret)
      }
    })
   .catch((error) => {
    console.log('error running qtDeleteAllAnswers', error)
    return {
      statusCode: 400,
      body: JSON.stringify(error)
    }
  })  
}
