
let myFaunaCollection = 'qtAnswers'
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
  const myUser = event.queryStringParameters.user
  console.log('myCust:',myCust)
  console.log('myQid:',myQid)
  console.log('myUser:',myUser)
  console.log('Netlify Function qtDeleteAllAnswers invoked.')
  console.log('function version date: 04/06/2023.')
  console.log('here is qtDeleteAllAnswers event:', event)
  //
// construct batch query from a list of Ids

let refs = await client.query
  (q.Paginate(q.Match(q.Index('qtAnswersX2'),[myCust,myQid,myUser]), { size: 1500 })
  ) // reads max of 1500 rows ?
let listOfIds = refs.data.map((r) => r.id)
console.log('28 lambda qtmassDelete function listOfIds:')
console.table(listOfIds) // selzer april 6 why isnt mass delete working? maybe was size parm?
 const deleteAllQuery = listOfIds.map((idd) => {
   return q.Delete(q.Ref(`classes/qtAnswers/${idd}`))
})
  return client.query(deleteAllQuery)
    .then((response) => {
      console.log('running .then of qtDeleteAllAnswers')
      return {
        statusCode: 200,
        headers: {'Access-Control-Allow-Origin': '*'},
        body: JSON.stringify(response)
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
