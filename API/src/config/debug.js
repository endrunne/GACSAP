module.exports = (request, response, next) => {
    console.log(`${request.method} at ${request.url}. requested by: ${request.headers.origin}`)
    console.log(request.body)
    next()
}