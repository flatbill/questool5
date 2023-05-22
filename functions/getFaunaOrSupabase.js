const faunaOrSupabase = process.env.faunaOrSupabase
// const faunaOrSupabase = 'faunaxxx'
let responseBody = {
  message: 'hi from message'
};

/* export our lambda function as named "handler" export */
exports.handler = async (event, context) => {
  console.log('running 9 getFaunaOrSupabase lambda')
  console.log('faunaOrSupabase:')
  console.log(faunaOrSupabase)
  console.log('json stringify response body:')
  console.log(JSON.stringify(responseBody))
      return {
        statusCode: 200,
        headers: {  'Access-Control-Allow-Origin': '*'  },
        body:    JSON.stringify(responseBody)
      }
}
