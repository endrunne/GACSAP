module.exports = (request, response, next) => { 
    console.log(`${request.method} at ${request.url}`)
    console.log(request.body)
    next()
}