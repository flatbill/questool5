// const faunaOrSupabase = process.env.faunaOrSupabase
const faunaOrSupabase = 'fauna'

/* export our lambda function as named "handler" export */
exports.handler = async (event, context) => {
  /* configure faunaDB Client with our secret */
  /* parse the string body into a useable JS object */
      return {
        statusCode: 200,
        headers: {  'Access-Control-Allow-Origin': '*'  },
        body: faunaOrSupabase
      }
}
