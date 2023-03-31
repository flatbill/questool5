
/* Import faunaDB sdk */
const faunadb = require('faunadb')
const q = faunadb.query

exports.handler = (event, context) => {
  /* configure faunaDB Client with our secret */
  const client = new faunadb.Client({
    secret: process.env.FAUNADB_SERVER_SECRET2
  }) 

  console.log('Netlify Function qtReadMultTeamMembers invoked.')
  return client.query(q.Paginate(q.Documents(q.Collection('qtTeamMembers')),{ size: 5 }))
    .then((response) => {
    const qtTeamMembersRefs = response.data
    console.log('23 qtTeamMember refs:', qtTeamMembersRefs)
    console.log(`${qtTeamMembersRefs.length} qtTeamMembers found`)
    const getAllqtTeamMemberssDataQuery = qtTeamMembersRefs.map((ref) => {
      return q.Get(ref)
    })
    // then query the refs
    console.log('getAllqtTeamMemberssDataQuery:')
    console.table(getAllqtTeamMemberssDataQuery)
    return client.query(getAllqtTeamMemberssDataQuery).then((ret) => {
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