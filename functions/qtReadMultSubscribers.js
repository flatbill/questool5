
let myFaunaCollection = 'qtSubscribers'
/* Import faunaDB sdk */
const faunadb = require('faunadb')
const q = faunadb.query

exports.handler = (event, context) => {
  /* configure faunaDB Client with our secret */
  const client = new faunadb.Client({
    secret: process.env.FAUNADB_SERVER_SECRET2
  }) 
//   const mySubscriber = event.queryStringParameters.subscriber

  console.log('Netlify Function qtReadMultSubscribers invoked.')
//   console.log(mySubscriber)
  // let myFaunaDbName = 'alaska6'  // not needed cuz FAUNADB_SERVER_SECRET2 is tied to database alaska6.
  
  // let myFaunaFetchSubscribers = 'classes/' + myFaunaCollection + '/'
//   return client.query(q.Paginate(q.Match(q.Index('qtSubscribersX1'),[mySubscriber]),{ size: 1 }))
return client.query(q.Paginate(q.Documents(q.Collection('qtSubscribers')),{ size: 55 }))
    .then((response) => {
    const qtSubscribersStuff = response.data
    console.log('23 qtSubscribers stuff:', qtSubscribersStuff)
    console.log(`${qtSubscribersStuff.length} qtSubscribers found`)
    const getAllqtSubscribersDataQuery = qtSubscribersStuff.map((ref) => {
      return q.Get(ref)
    })
    // then query the refs
    return client.query(getAllqtSubscribersDataQuery).then((ret) => {
      return {
        statusCode: 200,
        headers: {'Access-Control-Allow-Origin': '*'},
        body: JSON.stringify(ret)
      }
    })
  })
  .catch((error) => {
    console.log('error', error)
    return {
      statusCode: 400,
      body: JSON.stringify(error)
    }
  })  
}
