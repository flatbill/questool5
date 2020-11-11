
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
let frogIds = ["281634707771228672","281634709760377347"]

let refs = await client.query(q.Paginate(q.Match(q.Index('qtAnswersX1'),myQid)))
console.log('refs  here:')
console.table(refs)
let bigQuery = refs.data.map((reff) => q.Get(reff.id))
console.log('bigQuery length:',bigQuery.length)
console.table(bigQuery)
console.log(bigQuery[0].get)
//let allDocuments = await client.query(bigQuery)
//let deleteAllQuery = bigQuery.map((idd) => {
  //let deleteAllQuery = frogIds.map((idd) => {
    let deleteAllQuery = bigQuery.map((idd) => {
      //const deleteAllQuery = allDocuments.map((idd) => {
    return q.Delete(q.Ref(`classes/qtAnswers/${idd}`))
})
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
