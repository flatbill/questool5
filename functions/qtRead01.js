exports.handler = (event, context) => {
  console.log('hello from qtRead1.js')
  return {
    statusCode: 200,
    body: 'wingo'
  }
}