const port = 3000

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('./cors')
// const example = require('../example/index.js')
const csap = require('../CSAP/index.js')
const server = express()

server.use(bodyParser.urlencoded({ extended:true}))
server.use(bodyParser.json())
server.use(cors)

// const ExecuteRoutine =
//     Promise.resolve(example());

// console.log(ExecuteRoutine);

const CSAPRoutine =
    Promise.resolve(csap());

console.log(CSAPRoutine);

server.listen(port, _ => console.log(`Servidor no ar na porta ${port}`))

module.exports = server
