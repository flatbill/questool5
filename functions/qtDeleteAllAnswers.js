
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
  console.log('myCust:',myCust)
  console.log('myQid:',myQid)
  console.log('Netlify Function qtDeleteAllAnswers invoked.')
  console.log('here is qtDeleteAllAnswers event:', event)
  //
// construct batch query from a list of Ids
let frogIds = ["281630512545530370","281630515933479426"]
const deleteAllQuery = frogIds.map((idd) => {
  return q.Delete(q.Ref(`classes/qtAnswers/${idd}`))
})
// Hit it and quit it
//
  return client.query(deleteAllQuery)
  //   q.Delete(
  //       Select(
  //        "ref",
  //        Get(
  //         //Match(Index("qtAnswersX1"), [myCust,myQid])
  //         Match(Index("qtAnswersX1"), myQid)
  //         )))
  // )
    .then((response) => {
      //const qtFango = response.data
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
