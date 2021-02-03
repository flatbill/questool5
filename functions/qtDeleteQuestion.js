/* Import faunaDB sdk */
const faunadb = require('faunadb')
const q = faunadb.query

/* export our lambda function as named "handler" export */
exports.handler = async (event, context) => {
  /* configure faunaDB Client with our secret */
  const client = new faunadb.Client({
    secret: process.env.FAUNADB_SERVER_SECRET2

  })  
  const myCust = "1" //event.queryStringParameters.cust 
  const myQid = "1" //event.queryStringParameters.qid 
  const myQuestNbr = '010'  //billy fix this to get questNbr from input 

  /* parse the string body into a useable JS object */
  const data = JSON.parse(event.body)
  console.log('Function qtDeleteQuestion invoked', data)
  //(q.Match(q.Index('qtQuestionsX2'),[myCust,myQid,myQuestNbr]))
  let queryThingie = await client.query
  (q.Get(q.Match(q.Index('qtQuestionsX2'),[myCust,myQid,myQuestNbr])))
  console.log('row 22 pgm change at 7:04')
  console.log(queryThingie.ref)
  //let listOfIds = refs.data.map((r) => r.id)
  //  let firstRef = listOfIds[0]
  //  let wonderClang = 'classes/qtAnswers/' + firstRef

  const questionAdelic = {
    data: data //billy transform input to ref1 somehow
  }

  
  /* construct the fauna query */
  //return client.query(q.Delete(q.Ref('classes/qtQuestions'), ref1))
  //return client.query(q.Delete(q.Ref(wonderClang)))
  //return client.query(q.Delete(q.Ref('classes/qtQuestions', ref1)))
  return client.query(q.Delete(q.Ref(queryThingie.ref)))
    .then((response) => {
      console.log('success', response)
      /* Success! return the response with statusCode 200 */
      return {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*' 
        //  'Access-Control-Allow-Origin': 'http://localhost:4200' 
        // netlify allows only one allow-origin.  
        // this wrecks the query string fetch.
        // so, I set this to '*' which is hopefully temp,
        // until I can figure it out.
        },
        body: JSON.stringify(response)
      }
    }).catch((error) => {
      console.log('error', error)
      /* Error! return the error with statusCode 400 */
      return {
        statusCode: 400,
        body: JSON.stringify(error)
      }
    })
}
