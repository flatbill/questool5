/* Import faunaDB sdk */
const faunadb = require('faunadb')
const q = faunadb.query

/* export our lambda function as named "handler" export */
exports.handler = async (event, context) => {
  /* configure faunaDB Client with our secret */
  const client = new faunadb.Client({
    secret: process.env.FAUNADB_SERVER_SECRET2

  })  
  /* parse the string body into a useable JS object */
  const data = JSON.parse(event.body)
  console.log('Function `answer-create` invoked', data)
  const answer111 = {
    data: data
  }
  /* construct the fauna query */
  return client.query(q.Create(q.Ref('classes/qtAnswers'), answer111))
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
