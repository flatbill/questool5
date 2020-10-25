
let myFaunaCollection = 'qtSubsets'
/* Import faunaDB sdk */
const faunadb = require('faunadb')
const q = faunadb.query

exports.handler = (event, context) => {
  /* configure faunaDB Client with our secret */
  const client = new faunadb.Client({
    secret: process.env.FAUNADB_SERVER_SECRET2
  }) 

  console.log('Netlify Function qtReadSubsets invoked.')
  // let myFaunaDbName = 'alaska6'  // not needed cuz FAUNADB_SERVER_SECRET2 is tied to database alaska6.
  
  let myFaunaFetchQuests = 'classes/' + myFaunaCollection + '/'
  // return client.query(q.Paginate(q.Match(q.Ref('indexes/qtSubsetsX1'))))
  return client.query(q.Paginate(q.Match(q.Index('qid'), '1' )))
  //q.Match(q.Index('spells_by_element'), 'fire')
    .then((response) => {
    const todoRefs = response.data
    console.log('Todo refs', todoRefs)
    console.log(`${todoRefs.length} todos found`)
    const getAllTodoDataQuery = todoRefs.map((ref) => {
      return q.Get(ref)
    })
    // then query the refs
    return client.query(getAllTodoDataQuery).then((ret) => {
      return {
        statusCode: 200,
        headers: {'Access-Control-Allow-Origin': '*'},
        body: JSON.stringify(ret)
      }
    })
  }).catch((error) => {
    console.log('error', error)
    return {
      statusCode: 400,
      body: JSON.stringify(error)
    }
  })  
}
// function getIdInline(urlPath) {
//   console.log(`Running getIdInline from Netlify Function . urlPath: ${urlPath}`)

//   return urlPath.match(/([^\/]*)\/*$/)[0]
// }