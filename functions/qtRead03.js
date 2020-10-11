
// read one question by myId from qtQuestions collection.
let myFaunaCollection = 'qtQuestions'
/* Import faunaDB sdk */
const faunadb = require('faunadb')
const q = faunadb.query


exports.handler = (event, context) => {
  /* configure faunaDB Client with our secret */
  const client = new faunadb.Client({
    secret: process.env.FAUNADB_SERVER_SECRET2
  }) 
  // let myFaunaDbName = 'alaska6'  // not needed cuz FAUNADB_SERVER_SECRET2 is tied to database alaska6.
 
  // let myFaunaCollection = 'qtQuestions'
  let myFaunaRecId =  '276380634185728512'
  let myFaunaFetchRef = 'classes/' + myFaunaCollection + '/'+ myFaunaRecId 
  console.log('Function read03 myFaunaFetchRef : ' + myFaunaFetchRef) 

  
  return client.query(q.Get(q.Ref(myFaunaFetchRef)))
    .then((response) => {
      console.log('success myFaunaFetchRef ', response)
      return {
        statusCode: 200,
        body: JSON.stringify(response)
      }
    }).catch((error) => {
      console.log('error myFaunaFetchRef:', error)
      return {
        statusCode: 400,
        headers: {
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(error)
      }
    })
}
