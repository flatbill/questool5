
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
  let params1 = (new URL(document.location)).searchParams;
  let name = params1.get("ref");
  //let x = window.location.origin //cors fail?
  //let faunaRefIdParmIn  = urlSearchParams.get("ref")   //?cors fail?
  // let myFaunaDbName = 'alaska6'  // not needed cuz FAUNADB_SERVER_SECRET2 is tied to database alaska6.
  // let myFaunaCollection = 'qtQuestions'
  let myFaunaRecId =  '276380634185728512'
  //if (faunaRefIdParmIn.length > 0 ) {myFaunaRecId = faunaRefIdParmIn}
  let myFaunaFetchRef = 'classes/' + myFaunaCollection + '/'+ myFaunaRecId 
  console.log('Function read03 myFaunaFetchRef : ' + myFaunaFetchRef) 

  
  return client.query(q.Get(q.Ref(myFaunaFetchRef)))
    .then((response) => {
      console.log('success myFaunaFetchRef ', response)
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
      console.log('error myFaunaFetchRef:', error)
      return {
        statusCode: 400,
        headers: {
          'Access-Control-Allow-Origin': 'http://localhost:4200' 
        },
        body: JSON.stringify(error)
      }
    })
}
