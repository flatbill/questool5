
let myFaunaCollection = 'qtUsers'
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
  console.log('myQid:',myUser)
  console.log('Netlify Function qtDeleteParticipant invoked.')
  console.log('function qtDeleteParticipant version 02/12/2021')
  console.log('here is qtDeleteParticipant event:', event)
  //
// construct batch query from a list of Ids

let refs = await client.query
  (q.Paginate(q.Match(q.Index('qtUsersX2'),[myCust,myQid,myUser]))
  )
let listOfIds = refs.data.map((r) => r.id)
 const deleteMassQuery = listOfIds.map((idd) => {
   return q.Delete(q.Ref(`classes/qtUsers/${idd}`))
})
  return client.query(deleteMassQuery)
    .then((response) => {
      console.log('running .then of qtDeleteParticipant')
      return {
        statusCode: 200,
        headers: {'Access-Control-Allow-Origin': '*'},
        body: JSON.stringify(response)
      }
    })
   .catch((error) => {
    console.log('error running qtDeleteParticipant', error)
    return {
      statusCode: 400,
      body: JSON.stringify(error)
    }
  })  
}
